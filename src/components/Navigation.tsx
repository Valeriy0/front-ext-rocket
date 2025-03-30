import React from "react";

interface NavigationProps {
    resetToken: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ resetToken }) => {
    return (
        <div className="relative w-full h-[48px] flex items-center justify-center">
            <div onClick={resetToken} className="transition-all duration-300 absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer h-[48px] w-[48px] flex items-center justify-center hover:opacity-50">
                <svg  className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 8L10 12L14 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
           
            <span className="text-center text-[14px] leading-[20px] font-light text-white opacity-50">
                Token Details
            </span>
        </div>
    );
}
