import React, { useState, useMemo } from "react";
import { Header } from "../../components/Header";
import { Start } from "../../components/Steps/Start";
import { EnterToken } from "../../components/Steps/EnterToken";
import { TokenInfo } from "../../components/Steps/TokenInfo";

export const Login = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [tokenAddress, setTokenAddress] = useState(null);

  console.log(tokenAddress);

  const currentStep = useMemo(() => {
    if (!isStarted) {
      return <Start setIsStarted={setIsStarted} />;
    } else {
      if (!!tokenAddress) {
        return <TokenInfo resetToken={() => setTokenAddress(null)} />
      } 
      return <EnterToken tokenAddress={tokenAddress} setTokenAddress={setTokenAddress} />
    }
  }, [isStarted, tokenAddress] )

    return (
      <div className="h-[500px] w-[300px] bg-mainBg flex flex-col p-4 pt-0">
        <Header />
        {currentStep}
      </div>  
    )
}