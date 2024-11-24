import React from "react";
import Heading from "../utilities/Heading";
import LogoMain from "../../assets/image/logoMain.png";
import MonthlyUpdate from "../../assets/image/monthlyUpdate.png";
import SubHeading from "../utilities/SubHeading";
import PrimaryBTN from "../utilities/PrimaryBTN";
import { Link } from "react-router-dom";
import NavLinks from "../utilities/NavLinks";

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
            <Link className="h-auto w-2/5 rounded-md overflow-hidden block relative">
              <img
                className="w-full h-full object-cover"
                src={LogoMain}
                alt="AtpTour Image"
              />
              <div className="w-full h-full hover:bg-[#7c71715c] absolute top-0 left-0 transition-all duration-300 ease-in-out"></div>
            </Link>
            <div className="w-3/5">
              <NavLinks
                className="hover:!text-hoverColor !text-[#3e424a] !text-[24px] block !p-0"
                title="Automated Reward Pay outs with Sustainability Proofs"
              />
              <span className="text-lineColor text-sm font-nunito">
                October 27, 2024
              </span>
            </div>
          </div>
          <div className="w-full flex items-center gap-5">
            <Link className="h-auto w-2/5 rounded-md overflow-hidden block relative">
              <img
                className="w-full h-full object-cover"
                src={MonthlyUpdate}
                alt="AtpTour Image"
              />
              <div className="w-full h-full hover:bg-[#7c71715c] absolute top-0 left-0 transition-all duration-300 ease-in-out"></div>
            </Link>
            <div className="w-3/5">
              <NavLinks
                className="hover:!text-hoverColor !text-[#3e424a] !text-[24px] block !p-0"
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
