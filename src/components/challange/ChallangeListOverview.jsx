import React from "react";
import { Link } from "react-router-dom";
import PrimaryBTN from "../utilities/PrimaryBTN";
import AtpTour from "../../assets/image/challangeCard/atp-tour.jpg";
import MicroplasticsMin from "../../assets/image/challangeCard/microplastics-min.png";
import NavLinks from "../utilities/NavLinks";

const ChallangeListOverview = () => {
  return (
    <section className="pb-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 items-center justify-between">
          <div className="w-full flex items-center gap-5">
            <Link className="h-auto w-2/5 rounded-md overflow-hidden block relative">
              <img
                className="w-full h-full object-cover"
                src={AtpTour}
                alt="AtpTour Image"
              />
              <div className="w-full h-full hover:bg-[#7c71715c] absolute top-0 left-0 transition-all duration-300 ease-in-out"></div>
              <PrimaryBTN
                className="absolute right-1 bottom-1 !px-2 !py-1 rounded-md !text-xs z-10"
                title="avilable"
              />
            </Link>
            <div className="w-3/5">
              <NavLinks
                className="hover:!text-hoverColor !text-[#3e424a] !text-[24px] block !p-0"
                title="Automated Reward Pay outs with Sustainability Proofs"
              />
              <PrimaryBTN
                className="!bg-[#009b722c] hover:!bg-primary !text-primary hover:!text-subHeading rounded-md !px-3 !py-1 !text-base mt-4"
                title="partnerships"
              />
            </div>
          </div>
          <div className="w-full flex items-center gap-5">
            <Link className="h-auto w-2/5 rounded-md overflow-hidden block relative">
              <img
                className="w-full h-full object-cover"
                src={MicroplasticsMin}
                alt="AtpTour Image"
              />
              <div className="w-full h-full hover:bg-[#7c71715c] absolute top-0 left-0 transition-all duration-300 ease-in-out"></div>
              <PrimaryBTN
                className="absolute right-1 bottom-1 !px-2 !py-1 rounded-md !text-xs z-10"
                title="avilable"
              />
            </Link>

            <div className="w-3/5">
              <NavLinks
                className="hover:!text-hoverColor !text-[#3e424a] !text-[24px] block !p-0"
                title="Microplastics"
              />
              <PrimaryBTN
                className="!bg-[#009b722c] hover:!bg-primary !text-primary hover:!text-subHeading rounded-md !px-3 !py-1 !text-base mt-4"
                title="Biospheres and Ecosystems"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallangeListOverview;
