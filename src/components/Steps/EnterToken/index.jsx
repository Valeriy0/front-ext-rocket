import React from "react";
import { Button } from "../../Button";
import { Input } from "../../Input";

export const EnterToken = ({ setTokenAddress }) => {
    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex-1 flex flex-col items-center justify-start space-y-6">
                <div className="pt-6 flex flex-col items-center justify-center w-full text-center space-y-2">
                    <span className="text-[20px] leading-[24px] font-medium text-white">Enter the token address</span>
                    <span className="text-[14px] leading-[20px] font-light text-white opacity-50">We will show you important information for making a decision</span>
                </div>
                <Input placeholder="Token address" />
            </div>
            <Button onClick={() => setTokenAddress('0x0000')} type="main">Continue</Button>
        </div>
    )
}