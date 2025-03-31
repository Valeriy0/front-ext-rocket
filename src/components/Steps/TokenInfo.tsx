import React, { useMemo } from "react";
import { Button } from "../Button";
import { Navigation } from "../Navigation";

interface TokenInfoProps {
    resetToken: () => void;
    hasBundleCheckFailed: boolean;
    isBundleCheckCompleted: boolean;
    bundleCheckResult?: boolean;

    hasSwapCheckFailed: boolean;
    isSwapCheckCompleted: boolean;
    swapVolumePercentage?: number;

    hasDevShareCheckFailed: boolean;
    isDevShareCheckCompleted: boolean;
    devSharePercentage?: number;
}

export const TokenInfo: React.FC<TokenInfoProps> = ({
    resetToken,
    hasBundleCheckFailed,
    isBundleCheckCompleted,
    bundleCheckResult,

    hasSwapCheckFailed,
    isSwapCheckCompleted,
    swapVolumePercentage,

    hasDevShareCheckFailed,
    isDevShareCheckCompleted,
    devSharePercentage,
}) => {
    const status = useMemo(() => {
        if (!isBundleCheckCompleted || !isDevShareCheckCompleted || !isSwapCheckCompleted) return 'loading';
        if (hasBundleCheckFailed || hasDevShareCheckFailed || hasSwapCheckFailed) return 'error';
        if (bundleCheckResult && devSharePercentage && swapVolumePercentage) return 'success';
        return 'loading';
    }, [isBundleCheckCompleted, hasBundleCheckFailed, bundleCheckResult, isDevShareCheckCompleted, hasDevShareCheckFailed, devSharePercentage, isSwapCheckCompleted, hasSwapCheckFailed, swapVolumePercentage]);

    const aboutToken = useMemo(() => {
        return (
            <div className="flex items-center justify-start w-full space-x-2">
                <div className="bg-white h-[48px] w-[48px] rounded-[8px]"></div>
                <div className="flex flex-col items-start justify-start space-y-1">
                    <span className="text-[16px] leading-[20px] font-medium text-white">WWIII Price</span>
                    <span className="text-[14px] leading-[18px] font-light text-white opacity-50">WWIII</span>
                </div>
            </div>
        );
    }, []);

    const ResultItem = ({ label, value }: { label: string, value: string }) =>
        <div className="flex items-center justify-between">
            <span className="text-white text-[14px] leading-[18px] font-light">{label}</span>
            {value === 'Pending' ? (
                <img src="/image/loader.svg" alt="loader" className="w-[16px] h-[16px] animate-spin" />
            ) : (
                <span className={`transition-all duration-300 status-text ${value.toLocaleLowerCase()} text-[#1DF49A] text-[14px] leading-[18px] font-light`}>{value}</span>
            )}
        </div>
    const checkers = useMemo(() => {
        return (
            <div className="flex flex-col space-y-4 w-full">
                <ResultItem label="Bundle"
                    value={!isBundleCheckCompleted ? 'Pending' :
                        hasBundleCheckFailed ? 'Error' :
                        bundleCheckResult ? 'True' : 'False'}
                />
                <ResultItem label="Dev share"
                    value={!isDevShareCheckCompleted ? 'Pending' :
                        hasDevShareCheckFailed ? 'Error' :
                        devSharePercentage === undefined ? 'N/A' :
                        `${devSharePercentage.toFixed(2)}%`}
                />
                <ResultItem label="Artificial volume"
                    value={!isSwapCheckCompleted ? 'Pending' :
                        hasSwapCheckFailed ? 'Error' :
                        swapVolumePercentage === undefined ? 'N/A' :
                        `${swapVolumePercentage.toFixed(2)}%`}
                />
            </div>
        );
    }, [
        isBundleCheckCompleted,
        hasBundleCheckFailed,
        bundleCheckResult,
        isDevShareCheckCompleted,
        hasDevShareCheckFailed,
        devSharePercentage,
        isSwapCheckCompleted,
        hasSwapCheckFailed,
        swapVolumePercentage
    ]);

    return (
        <div className="flex flex-col h-full w-full">
            <Navigation resetToken={resetToken} /> 
            <div className="pt-3 flex-1 flex flex-col items-center justify-start space-y-6">
                {aboutToken}
                {checkers}
            </div>
            <Button className="cursor-defaul pointer-events-none" variant={status}>
                {status === 'loading' ? "Not finished yet" :
                    status === 'error' ? "Not ok" :
                "Probably ok"}
            </Button>
        </div>
    );
}
