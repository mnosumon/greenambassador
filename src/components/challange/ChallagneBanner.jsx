import React from "react";
import SpecialtyCoffee from "../../assets/image/challangeCard/specialty-coffee.png";
import PrimaryBTN from "../utilities/PrimaryBTN";
import { Link } from "react-router-dom";
import Heading from "../utilities/Heading";
import Peragrap from "../utilities/Peragrap";

const ChallagneBanner = () => {
  return (
    <section className="pb-20 pt-36">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/2">
          <div className="w-4/5">
            <Heading
              className="!text-heading"
              title="Exploring the Hidden Sustainable Benefits of Specialty Coffee"
            />
            <Peragrap
              className="text-textColor mb-8"
              title="This challenge explores the sustainable and social benefits of specialty coffee, from micro-lot farming to community initiatives, highlighting its impact on the environment and livelihoods."
            />
            <PrimaryBTN
              className="bg-transparent !text-primary hover:bg-transparent hover:!text-hoverColor !p-0"
              title="Explore Challenges"
            />
          </div>
        </div>
        <div className="w-1/2">
          <div class="absolute z-[1] top-0 h-full w-[5vw] max-w-[72px] bg-white mask-divider-side transform scale-y-[-1] hidden lg:block"></div>

          <Link className="w-full  block relative">
            <img
              className="w-full h-full object-cover"
              src={SpecialtyCoffee}
              alt="Challange Image"
            />
            <div className="w-full h-full hover:bg-[#7c717134] absolute top-0 left-0 transition-all duration-300 ease-in-out"></div>
            <PrimaryBTN
              className="absolute right-5 bottom-5 !px-3 !py-1 rounded-md !text-sm z-10"
              title="avilable"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChallagneBanner;
