import React, { useEffect, useState } from "react";
import { Button } from "../Button";

interface StartProps {
    setIsStarted: (isStarted: boolean) => void; 
}

export const Start: React.FC<StartProps> = ({ setIsStarted }) => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimated(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                <div className="logo-container">
                    <img 
                        src={'/scopeLogo.svg'}
                        className={`logo-animation ${isAnimated ? 'scale-1' : 'scale-50'}`}
                        alt="Scope logo" 
                    />
                </div>

                <div className="flex flex-col items-center justify-center space-y-2 max-w-[75%]">
                    <span className="text-[20px] leading-[24px] font-medium text-white">Scope</span>
                    <span className="text-[14px] leading-[20px] font-light text-white opacity-50 text-center">
                        Showing important information about the token
                    </span>
                </div>
            </div>
            <Button onClick={() => setIsStarted(true)} type="button">Start</Button>
        </div>
    );
}
