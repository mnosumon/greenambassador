import React from "react";
import Heading from "../utilities/Heading";
import LogoMain from "../../assets/image/logoMain.png";
import MonthlyUpdate from "../../assets/image/monthlyUpdate.png";
import SubHeading from "../utilities/SubHeading";
import PrimaryBTN from "../utilities/PrimaryBTN";

const Loop = () => {
  return (
    <section className="pt-28">
      <div className="container mx-auto pb-16">
        <Heading
          className="!text-heading !text-[52px]"
          title="Stay in the Loop"
        />
        <div className="flex justify-end">
          <PrimaryBTN className="!px-3 !py-1 !text-sm" title="More news" />
        </div>
        <div className="grid grid-cols-2 items-center justify-between pt-14">
          <div className="w-full flex items-center gap-5">
            <div className="w-1/2 rounded-md overflow-hidden">
              <img className="w-full " src={LogoMain} alt="" />
            </div>
            <div className="">
              <SubHeading
                className="!text-[#000] !text-[24px]"
                title="Automated Reward Pay outs with Sustainability Proofs"
              />
              <span className="text-lineColor text-sm font-nunito">
                October 27, 2024
              </span>
            </div>
          </div>
          <div className="w-full flex items-center gap-5">
            <div className="w-1/2 rounded-md overflow-hidden">
              <img className="w-full " src={MonthlyUpdate} alt="" />
            </div>
            <div className="">
              <SubHeading
                className="!text-[#000] !text-[24px]"
                title="August 2024: Improved security and Rewards overview"
              />
              <span className="text-lineColor text-sm font-nunito">
                September 7, 2024
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[5vw] sm:h-[7vw] md:h-[10vw] bg-gradient-to-r from-[#009b72] to-[#046865] mask-divider"></div>
    </section>
  );
};

export default Loop;
