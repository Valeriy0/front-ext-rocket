import React from "react";

export const Navigation = () => {
    return (
        <div className="relative w-full h-[48px] flex items-center justify-center">
            <img className="absolute w-6 h-6 left-0 top-1/2 -translate-y-1/2" src="/image/arrowLeft.svg" alt="" />
            <span className="text-center text-[14px] leading-[20px] font-light text-white opacity-50">Token Details</span>
        </div>
    )
}