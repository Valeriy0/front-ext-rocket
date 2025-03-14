import React from "react";

const mainInfoClasses = 'h-[60px] w-full px-[31px] py-[10px] border border-solid rounded-[16px]';

const buttonTypes = {
    main: 'bg-orange px-[10px] py-[5px] w-full h-[48px] rounded-[36px] text-[16px] font-medium text-white',
    infoSuccess: `bg-[rgba(29,244,154,0.05)] border-success text-success ${mainInfoClasses}`,
    infoWarning: `bg-[rgba(229,137,71,0.05)] border-warning text-warning ${mainInfoClasses}`,
    infoError: `bg-[rgba(255,0,0,0.05)] border-error text-error ${mainInfoClasses}`,
}

export const Button = ({type = 'main', text, children, ...props}) => {
    return (
        <button className={buttonTypes?.[type]} {...props}>
            {children}
        </button>
    )
}