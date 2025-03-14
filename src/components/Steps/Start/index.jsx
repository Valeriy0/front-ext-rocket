import React from "react";
import { Button } from "../../Button";

export const Start = ({ setIsStarted }) => {
    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            <img className="h-[70px] w-[70px]" src="/image/whiteLogo.svg" alt="" />
            <div className="flex flex-col items-center justify-center space-y-2 max-w-[75%]">
                <span className="text-[20px] leading-[24px] font-medium text-white">Scope</span>
                <span className="text-[14px] leading-[20px] font-light text-white opacity-50 text-center">Showing important information about the token</span>
            </div>
            </div>
            <Button onClick={() => setIsStarted(true)} type="main">Start</Button>
        </div>
    )
}