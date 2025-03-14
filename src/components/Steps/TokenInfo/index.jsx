import React, { useMemo } from "react";
import { Button } from "../../Button";
import { Navigation } from "../../Navigation";

export const TokenInfo = () => {
    const checkList = ['Bundle', 'Artificial volume', 'Dev share'];

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
    }, [])

    const checkers = useMemo(() => {
        return (
            <div className="flex flex-col space-y-4 w-full">
                {checkList.map((item, itemIndex) => {
                    return (
                        <div className="flex items-center justify-between" key={itemIndex}>
                            <span className="text-white text-[14px] leading-[18px] font-light">{item}</span>
                            <span className="text-success text-[14px] leading-[18px] font-light">value</span>
                        </div>
                    )
                })}
            </div>
        )
    }, [])

    return (
        <div className="flex flex-col h-full w-full">
            <Navigation /> 
            <div className="pt-3 flex-1 flex flex-col items-center justify-start space-y-6">
                {aboutToken}
                {checkers}
            </div>
            <Button type="infoSuccess">Probably ok</Button>
        </div>
    )
}