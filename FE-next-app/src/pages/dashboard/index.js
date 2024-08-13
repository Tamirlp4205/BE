import React from "react";
import Image from "next/image";
import { DashboardLogoIcon } from "@/assets/logo";
import { Button } from "@/components/ui/button";
import profilePic from "../../assets/Placeholder.png";
import CardImg from "../../assets/Large.png";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between w-full pt-4 pb-4 text-base h-18 pr-60 pl-60">
        <div className="flex justify-center gap-4">
          <DashboardLogoIcon />
          <p>Dashboard</p>
          <p>Record</p>
        </div>
        <div className="flex gap-6">
          <Button className="bg-blue-600 rounded-3xl">+ Record</Button>
          <div className="size-10">
            <Image
              src={profilePic}
              alt="Picture of the author"
              height={50}
              width={40}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-slate-100">
        <div className="flex">
          <div className="w-[384px] h-[216px]">
            <Image
              src={CardImg}
              alt="Picture of the author"
              height={1000}
              width={1000}
            ></Image>
          </div>
          <div className="w-[384px] h-[216px]">
           
          </div>
          <div className="w-[384px] h-[216px]">
            
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
