import React from 'react'
import { BalanceLogoIcon } from '@/assets/logo'
import { Input } from "@/components/ui/input";
const Balance = () => {
  return (
    <div className='flex flex-col '>
        <div className='flex flex-col items-center gap-6'>
        <BalanceLogoIcon/>
        <h1 className='text-2xl'>Set up your cash Balance</h1>
        <Input placeholder="Email"
            className="border-none bg-slate-100" />
        </div>
            <p className='text-sm text-[#475569]'>How much cash do you have in your wallet?</p>
    </div>
  )
}

export default Balance