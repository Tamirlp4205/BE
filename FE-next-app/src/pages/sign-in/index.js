import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/assets/logo";
import Link from 'next/link'

const signIn = () => {
  return (
    <div className="grid w-full h-screen grid-cols-2 ">
      <div className="flex flex-col items-center justify-center gap-10">
        <LogoIcon />
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="color-[#0F172A] text-2xl">Welcome Back</h1>
          <p className="text-base text-[#334155]">
            Welcome back, Please enter your details
          </p>
        </div>
        <div className="flex flex-col gap-4 w-[384px]">
          <Input
            placeholder="Name or Email"
            className="bg-slate-100"
          />
          <Input placeholder="Password" className="bg-slate-100" />
          <Link href="/stepper">  <Button className="w-full bg-blue-600 rounded-2xl">Log In</Button></Link>
        </div>
        <div className="flex">
          <p>Don’t have account?</p>
          <Link href="/sign-up" className="text-blue-600">Sign-Up</Link>
        </div>
      </div>
      <div className="bg-blue-600"></div>
    </div>
  );
};

export default signIn;
