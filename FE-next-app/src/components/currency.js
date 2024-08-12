import React from "react";
import { CurrencyLogoIcon } from "@/assets/logo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Currency = () => {
  return (
    <div className="w-[384px] flex flex-col items-center   gap-8">
      <CurrencyLogoIcon />

      <h1 className="text-2xl">Select base currency</h1>
      <div className="w-full">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">MNT-Mongolian(Tugrik)</SelectItem>
            <SelectItem value="dark">USD-Americian(Dollar)</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-[#475569] mt-2">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one{" "}
        </p>
      </div>
    </div>
  );
};

export default Currency;
