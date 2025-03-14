import React from "react";

export const Input = ({ ...props }) => {
    return <input className=" px-6 rounded-[16px] h-[48px] w-full bg-[rgba(255,255,255,0.05)] text-white placeholder:text-white placeholder:opacity-50 outline-none" {...props} />
}