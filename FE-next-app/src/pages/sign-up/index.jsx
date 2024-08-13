import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/assets/logo";
import Link from 'next/link'

const SignUp = () => {
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
            placeholder="Name"
            className="bg-slate-100"
          />
          <Input
            placeholder="Email"
            className="bg-slate-100"
          />
          <Input placeholder="Password" className="bg-slate-100" />
          <Input placeholder="Re-Password" className="bg-slate-100"/>
        <Link href="/stepper">  <Button className="bg-blue-600 rounded-2xl">Sign-Up</Button></Link>
        </div>
        <div className="flex">
          <p>Already have account?</p>
          <Link href="/sign-in" className="text-blue-600">Sign-In</Link>
        </div>
      </div>
      <div className="bg-blue-600"></div>
    </div>
  );
};

export default SignUp;