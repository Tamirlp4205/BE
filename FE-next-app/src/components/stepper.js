import React from "react";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-center mt-8">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col ">
          <div className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                index <= currentStep
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className={`h-0.5 w-[70px] ${index < currentStep ? "bg-blue-600" : "bg-gray-300"}`}></div>
            )}
          </div>
          <div className="mt-2 font-medium text-black">{step}</div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
