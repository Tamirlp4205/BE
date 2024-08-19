import { Input } from '@/components/ui/input';
import { CashBalanceIcon } from './icon/CashBalanceIcon';

export const SelectCashBalance = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 mb-6">
        <CashBalanceIcon />
        <h1 className="text-2xl font-semibold text-[#0F172A]">
          Set up your cash Balance
        </h1>
      </div>
      <Input placeholder="Email" className="w-[352px] " />
      <p className="text-[12px] font-normal leading-4 mt-3 mb-8 text-[#475569]">
        How much cash do you have in your wallet?
      </p>
    </div>
  );
};
