import React, { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { isAddress } from "@solana/kit";

const isValidSolanaAddress = (address: string): boolean => {
    return isAddress(address);
};

interface EnterTokenProps {
    checkTokenAddress: (address: string) => void; 
}

export const EnterToken: React.FC<EnterTokenProps> = ({ checkTokenAddress }) => {
    const [tokenAddress, setTokenAddress] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleContinue = () => {
        const address = tokenAddress.trim();
        setError(null);
    
        if (!isValidSolanaAddress(address)) {
            setError('Invalid Solana address format');
            return;
        }

        checkTokenAddress(address);
    };

    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex-1 flex flex-col items-center justify-start space-y-6">
                <div className="pt-6 flex flex-col items-center justify-center w-full text-center space-y-2">
                    <span className="text-[20px] leading-[24px] font-medium text-white">
                        Enter the token address
                    </span>
                    <span className="text-[14px] leading-[20px] font-light text-white opacity-50">
                        We will show you important information for making a decision
                    </span>
                </div>
                <div className="flex flex-col items-center w-full space-y-2">
                    <Input
                        isError={!!error}
                        value={tokenAddress}
                        onChange={(e) => {
                            setTokenAddress(e.target.value);
                            setError(null);
                        }}
                        onKeyDown={(e) => e.key === 'Enter' && handleContinue()}
                        placeholder="Адрес токена"
                    />
                    
                    <div className={`opacity-0 ${error ? 'opacity-100' : ''} transition-opacity duration-300 text-center w-full bg-[rgba(251,61,61,0.09)] rounded-[12px] px-4 py-2 text-[#FB3D3D] text-[10px]`}>
                        {error || ''}
                    </div>
                    
                </div>
            </div>
            <Button variant="main" onClick={handleContinue} disabled={!tokenAddress || !!error || tokenAddress.trim().length === 0}>
                Продолжить
            </Button>
        </div>
    );
};
