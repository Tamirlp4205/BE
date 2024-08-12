import React from "react";
import { FinishLogoIcon } from "@/assets/logo";

const Finish = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <FinishLogoIcon />
      <h1 className="text-2xl font-bold">Good Job!</h1>
      <p className="text-base text-[#475569]">
        Your very first account has been created. Now continue to dashboard and
        start tracking
      </p>
    </div>
  );
};

export default Finish;
