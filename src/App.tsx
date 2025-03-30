import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Start } from './components/Steps/Start';
import { TokenInfo } from './components/Steps/TokenInfo';
import { EnterToken } from './components/Steps/EnterToken';
import config from './config';
import { hc } from 'hono/client';
import backend from '@backend/back/index';

interface SwapCheckData {
    round_trip_percent: number;
}

interface DevShareCheckData {
    single_token_holders_share_percent: number;
}

interface TokenTaskResponse {
    attemptIssue?: string;
    requestIssue?: string;
    bundle_check_status: string;
    bundle_check_result: boolean;
    swap_check_status: string;
    swapCheckData?: SwapCheckData;
    dev_share_check_status: string;
    devShareCheckData?: DevShareCheckData;
}

interface TokenTaskError {
    attemptIssue: string;
}

const client = hc<typeof backend>(config.backendBaseUrl);
const getTokenTask = async (address: string): Promise<TokenTaskResponse | TokenTaskError> => {
    const taskResponse = await client.token.$get({
        param: { address }
    });

    if(taskResponse.ok || taskResponse.status == 400) {
        const data = await taskResponse.json();
        return data as TokenTaskResponse;
    }
    return {
        attemptIssue: `failed with status ${taskResponse.status}`,
    };
};

type TokenTask = Awaited<ReturnType<typeof getTokenTask>>;
type ExcludeAttemptIssue<T> = T extends { attemptIssue: string } ? never : T;
type TokenTaskResult = ExcludeAttemptIssue<TokenTask>;
const isFailure = (status: string) => status == 'ERROR';
const isFinalStatus = (status: string) => status == 'COMPLETE' || isFailure(status);

function App() {
    const [isStarted, setIsStarted] = useState(false);
    const [tokenAddress, setTokenAddress] = useState<string | null>(null);
    const [tokenTask, setTokenTask] = useState<TokenTaskResult | undefined>(undefined);

    const startTokenTask = async (address: string) => {
        setTokenTask(undefined);
        setTokenAddress(address);

        const startTime = Date.now();
        while(Date.now() - startTime < config.pollingTimeoutMs) {
            try {
                const task = await getTokenTask(address);
                if('attemptIssue' in task) continue;

                setTokenTask(task);
                if('requestIssue' in task) break;
                if(isFinalStatus(task.bundle_check_status) &&
                   isFinalStatus(task.swap_check_status) &&
                   isFinalStatus(task.dev_share_check_status)
                ) {
                    break;
                }
            } catch (error) {
            }

            await new Promise((resolve) => setTimeout(resolve, config.pollingIntervalMs));
        }
    };

    const currentStep = useMemo(() => {
        if (!isStarted) {
            return <Start setIsStarted={setIsStarted} />;
        } else {
            if (tokenTask && !('requestIssue' in tokenTask)) {
                return <TokenInfo
                    resetToken={() => {
                        setTokenAddress(null);
                        setTokenTask(undefined);
                    }}
                    hasBundleCheckFailed={isFailure(tokenTask.bundle_check_status)}
                    isBundleCheckCompleted={isFinalStatus(tokenTask.bundle_check_status)}
                    bundleCheckResult={!!tokenTask.bundle_check_result}
                    hasSwapCheckFailed={isFailure(tokenTask.swap_check_status)}
                    isSwapCheckCompleted={isFinalStatus(tokenTask.swap_check_status)}
                    swapVolumePercentage={tokenTask.swapCheckData?.round_trip_percent ?? undefined}
                    hasDevShareCheckFailed={isFailure(tokenTask.dev_share_check_status)}
                    isDevShareCheckCompleted={isFinalStatus(tokenTask.dev_share_check_status)}
                    devSharePercentage={tokenTask.devShareCheckData?.single_token_holders_share_percent ?? undefined}
                />;
            }
            return <EnterToken checkTokenAddress={startTokenTask} />;
        }
    }, [isStarted, tokenTask]);

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-[#080808]">
            <div className="overflow-hidden h-[500px] w-[300px] bg-[#080808] border-2 border-[#202020] flex flex-col p-4 pt-0 rounded-[16px]">
                <Header />
                {currentStep}
            </div>
        </div>
        
    );
}

export default App;
