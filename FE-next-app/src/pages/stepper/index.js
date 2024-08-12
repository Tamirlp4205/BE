import Stepper from "../../components/stepper";
import { LogoIcon } from "@/assets/logo";
import { useState } from 'react';
import Balance from '@/components/balance';
import Currency from "@/components/currency";
import Finish from "@/components/finish";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ['Currency', 'Balance', 'Finish'];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-[240px] flex flex-col items-center mt-10">
        <LogoIcon />
        <Stepper steps={steps} currentStep={currentStep} className="flex flex-col" />
        <div style={{ marginTop: '180px', textAlign: 'center' }}>
          
          {currentStep === 0 && <Currency />}
          {currentStep === 1 && <Balance />}
          {currentStep === 2 && <Finish />}

          <button 
            className="w-full h-12 bg-[#0166FF] rounded-3xl mt-8 text-white text-[20px]"  
            onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))} 
            disabled={currentStep === steps.length - 1}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
