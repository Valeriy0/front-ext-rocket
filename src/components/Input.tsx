import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isError?: boolean;
}

export const Input: React.FC<InputProps> = ({ isError, ...props }) => {
    const borderColor = isError ? '!border-[#FB3D3D] !text-[#FB3D3D]' : 'border-transparent';
    return (
        <input
            className={`cursor-pointer px-6 rounded-[16px] h-[48px] w-full bg-[rgba(255,255,255,0.05)] text-white border border-solid hover:border-[rgba(255,255,255,0.1)] active:border-[rgba(255,255,255,0.1)] placeholder:text-white placeholder:opacity-50 outline-none ${borderColor}`}
            {...props}
        />
    );
}
