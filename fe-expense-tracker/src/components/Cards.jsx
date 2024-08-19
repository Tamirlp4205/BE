import Abstract from '@/components/icon/Abstract';
import LogoWhite from '@/components/icon/LogoWhite';
import Wi from '@/components/icon/Wi';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import CircleArrowUp from './icon/CircleArrowUp';
import CircleArrowDown from './icon/CircleArrowDown';

export const Cards = ({ balance, percent }) => {
  return (
    <div className="grid grid-cols-3 gap-6 max-h-[220px]">
      <Card className="bg-[#0166FF] max-h-[220px] relative rounded-[18px]">
        <CardHeader>
          <LogoWhite />
        </CardHeader>
        <CardFooter className="items-end justify-between pr-[30px] pt-12">
          <div>
            <h1 className="text-base font-normal leading-6 text-[#FFFFFF] opacity-50">
              Cash
            </h1>
            <h1 className="text-2xl font-semibold text-white">{balance}</h1>
          </div>
          <Wi />
          <div className="absolute bottom-0 right-0">
            <Abstract />
          </div>
        </CardFooter>
      </Card>
      <Card className="max-h-[220px] rounded-[18px]">
        <CardHeader className="border-b-[1px] p-0">
          <div className="flex items-center gap-2 px-6 py-4 font-semibold leading-6 text-[#0F172A]">
            <div className="size-2 bg-[#84CC16] rounded-full"></div>Your Income
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-1 px-6 py-5">
          <p className="text-[36px] font-semibold leading-[48px]">
            {balance >= 0 ? `${balance}$` : `-${Math.abs(balance)}$`}
          </p>
          <p className="text-lg leading-7 text-slate-500">Your Income Amount</p>
        </CardContent>
        <CardFooter className="flex gap-2">
          {balance >= 0 ? <CircleArrowUp /> : <CircleArrowDown />}
          <p className="text-[18px] leading-7">
            {percent >= 0 ? `${percent}% from last month` : `${Math.abs(percent)}% less than last month`}
          </p>
        </CardFooter>
      </Card>
      <Card className="max-h-[220px] rounded-[18px]">
        <CardHeader className="border-b-[1px] p-0">
          <div className="flex items-center gap-2 px-6 py-4 font-semibold leading-6 text-[#0F172A]">
            <div className="size-2 bg-[#84CC16] rounded-full"></div>Your Income
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-1 px-6 py-5">
          <p className="text-[36px] font-semibold leading-[48px]">
            {balance >= 0 ? `${balance}$` : `-${Math.abs(balance)}$`}
          </p>
          <p className="text-lg leading-7 text-slate-500">Your Income Amount</p>
        </CardContent>
        <CardFooter className="flex gap-2">
          {balance >= 0 ? <CircleArrowUp /> : <CircleArrowDown />}
          <p className="text-[18px] leading-7">
            {percent >= 0 ? `${percent}% from last month` : `${Math.abs(percent)}% less than last month`}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cards;
