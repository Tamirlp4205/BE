import { CorrectIcon } from '@/components/icon/CorrectIcon';
export const GoToDashboard = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 mb-6">
        <CorrectIcon />
        <h1 className="text-2xl font-semibold text-[#0F172A]">Good Job!</h1>
      </div>
      <p className="text-[16px] text-center font-normal leading-4 mt-3 mb-8 text-[#475569]">
        Your very first account has been created. Now continue to dashboard and
        start tracking
      </p>
    </div>
  );
};
