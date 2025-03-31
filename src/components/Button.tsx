import React, { ButtonHTMLAttributes } from "react";

const mainInfoClasses = 'transition-all duration-300 cursor-pointer h-[60px] w-full px-[31px] py-[10px] border border-solid rounded-[16px] disabled:opacity-50';

const buttonTypes = {
    main: 'bg-[#F46F51] px-[10px] py-[5px] w-full h-[48px] rounded-[36px] text-[16px] font-medium text-white',
    success: `bg-[rgba(29,244,154,0.05)] border-[#1DF49A] text-[#1DF49A] ${mainInfoClasses}`,
    warning: `bg-[rgba(229,137,71,0.05)] border-[#E58947] text-[#E58947] ${mainInfoClasses}`,
    error: `bg-[rgba(255,0,0,0.05)] border-[#F00] text-[#F00] ${mainInfoClasses}`,
    loading: `animate-pulse bg-[rgba(255,255,255,0.05)] border-white text-white ${mainInfoClasses}`,
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof buttonTypes; 
    text?: string;
    loading?: boolean;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ loading = false, variant = 'main', text, children, className,...props }) => {
    return (
        <button className={`${buttonTypes[variant]} ${className}`} {...props}>
            {text || children}
        </button>
    );
}
