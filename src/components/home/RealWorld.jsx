import React from "react";
import Heading from "../utilities/Heading";
import Peragrap from "../utilities/Peragrap";
import PrimaryBTN from "../utilities/PrimaryBTN";
import { Blob2Icon } from "../../assets/svg/Blob2Icon";
import VeworldIMG from "../../assets/image/veworldImg.png";

const RealWorld = () => {
  return (
    <div>
      <section className="py-28">
        <div className="container mx-auto flex items-center gap-10">
          <div className="w-1/2">
            <div className="bg-[#EAEDF2] py-3 px-5 rounded-full w-fit mb-10">
              <span className="bg-primary text-sm font-sans py-2 px-3 text-subHeading rounded-full mr-5">
                New
              </span>
              <PrimaryBTN
                className="bg-transparent !text-primary hover:bg-transparent hover:!text-hoverColor !text-base !p-0"
                title="Automated reward payouts live"
              />
            </div>
            <div className="w-4/5">
              <Heading
                className="!text-heading"
                title="Earn Real-World Rewards"
              />
              <Peragrap
                className="text-textColor my-8"
                title="Show what you learned to unlock real-world rewards!"
              />
              <Peragrap
                className="text-textColor mb-8"
                title="Cash out your rewards or redeem them for exclusive discounts on eco-friendly products and services that align with our mission."
              />
              <PrimaryBTN
                className="shadow-md !bg-[#046865] hover:!bg-[#0e3736]"
                title="join now for free"
              />
            </div>
          </div>
          <div className="w-1/2 h-[60vh] relative">
            <div className="absolute -top-[10%] -left-[10%] w-full h-full">
              <Blob2Icon />
            </div>
            <div className="w-2/5 h-full -top-[5%] absolute  left-[15%]">
              <img
                className="w-full h-auto"
                src={VeworldIMG}
                alt="Device Layer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealWorld;
