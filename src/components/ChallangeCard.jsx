import React from "react";
import SpecialtyCoffee from "../assets/image/challangeCard/specialty-coffee.png";
import MicroplasticsMin from "../assets/image/challangeCard/microplastics-min.png";
import AtpTour from "../assets/image/challangeCard/atp-tour.jpg";
import PrimaryBTN from "./utilities/PrimaryBTN";
import Heading from "./utilities/Heading";
import Peragrap from "./utilities/Peragrap";
import { TaskClip } from "../assets/svg/TaskClip";
import { Clock } from "../assets/svg/Clock";
const ChallangeCard = () => {
  return (
    <div className="w-full rounded-md shadow-md overflow-hidden">
      <div className="border-b border-lineColor">
        <div className="w-full h-[50vh] overflow-hidden relative">
          <img
            className="w-full h-full object-cover"
            src={SpecialtyCoffee}
            alt="Specialty Coffee"
          />
          <PrimaryBTN
            className="absolute right-5 bottom-5 !px-3 !py-1 rounded-md !text-sm"
            title="abvilable"
          />
        </div>
        <div className="px-6 py-5">
          <PrimaryBTN
            className="!bg-[#009b722c] hover:!bg-primary text-primary hover:text-subHeading rounded-md !px-3 !py-1 !text-base"
            title="Food and Agriculture"
          />
          <Heading
            className="!text-heading !text-3xl !leading-[1.2] mt-6 mb-3 cursor-pointer"
            title="Exploring the Hidden Sustainable Benefits of Specialty Coffee"
          />
          <Peragrap
            className="!text-heading !text-lg !leading-[1.3]"
            title="This challenge explores the sustainable and social benefits of specialty coffee, from micro-lot farming to community initiatives, highlighting its impact on the environment and livelihoods."
          />
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-2">
        <div className="flex items-center gap-2">
          <div className="text-primary">
            <TaskClip />
          </div>
          <Peragrap className="!text-heading !text-lg" title="6 Task" />
        </div>
        <div className="flex items-center gap-2">
          <div className="text-primary">
            <Clock />
          </div>
          <Peragrap className="!text-heading !text-lg" title="25 min" />
        </div>
      </div>
    </div>
  );
};

export default ChallangeCard;
