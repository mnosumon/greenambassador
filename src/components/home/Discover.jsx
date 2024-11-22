import React from "react";
import Heading from "../utilities/Heading";
import Peragrap from "../utilities/Peragrap";
import PrimaryBTN from "../utilities/PrimaryBTN";
import { Blob4Icon } from "../../assets/svg/Blob4Icon";
import DeviceLayer from "../../assets/image/deviceLayer.png";

const Discover = () => {
  return (
    <section>
      <div className="container mx-auto flex justify-between gap-10">
        <div className="w-1/2 py-20">
          <div className="w-4/5">
            <Heading
              className="!text-heading"
              title="Discover a World of Sustainability Knowledge"
            />
            <Peragrap
              className="text-textColor my-8"
              title="Explore a wide variety of sustainability learning challenges."
            />
            <Peragrap
              className="text-textColor mb-8"
              title="Topics range from climate change essentials to unique challenges developed in colloberation with like-minded organizations."
            />
            <PrimaryBTN
              className="bg-transparent !text-primary hover:bg-transparent hover:!text-hoverColor !p-0"
              title="Explore Challenges"
            />
          </div>
        </div>
        <div className="w-1/2 h-[60vh] relative">
          <div className="absolute top-0 -left-[10%] w-full h-full">
            <Blob4Icon />
          </div>
          <div className="w-1/2 h-full absolute -top-[5%] left-[15%]">
            <img
              className="w-full h-auto"
              src={DeviceLayer}
              alt="Device Layer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
