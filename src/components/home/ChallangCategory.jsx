import React from "react";
import Heading from "../utilities/Heading";
import WasteManagement from "../../assets/image/category/waste-management.png";
import SustainabFunda from "../../assets/image/category/sustainability-fundamentals.png";
import Partnerships from "../../assets/image/category/partnerships.png";
import FoodAndAgriculture from "../../assets/image/category/food-and-agriculture.png";
import EnergyConservation from "../../assets/image/category/energy-conservation.png";
import ClimateChange from "../../assets/image/category/climate-change.png";
import BiospheresEcosystems from "../../assets/image/category/biospheres-and-ecosystems.png";
import SubHeading from "../utilities/SubHeading";
import CategoryIcon from "../utilities/Home/CategoryIcon";

const ChallangCategory = () => {
  return (
    <section className="bg-gradient-to-r py-24 from-[#009b72] to-[#046865]">
      <div className="container mx-auto text-center">
        <Heading className="!text-[52px]" title="Challenge Categories" />
        <div className="flex flex-wrap items-center justify-center gap-3 pt-14">
          <div className="bg-subHeading flex items-center gap-3 py-5 px-8 w-fit rounded-md">
            <CategoryIcon sourc={ClimateChange} alter="Climate Change" />
            <SubHeading title="claimet change" />
          </div>
          <div className="bg-subHeading flex items-center gap-3 p-5 w-fit rounded-md">
            <CategoryIcon
              sourc={EnergyConservation}
              alter="Energy Conservation"
            />
            <SubHeading title="Energy Conservation" />
          </div>
          <div className="bg-subHeading flex items-center gap-3 p-5 w-fit rounded-md">
            <CategoryIcon sourc={Partnerships} alter="Partnerships" />
            <SubHeading title="Partnerships" />
          </div>
          <div className="bg-subHeading flex items-center gap-3 p-5 w-fit rounded-md">
            <CategoryIcon
              sourc={FoodAndAgriculture}
              alter="Food And Agriculture"
            />
            <SubHeading title="Food And Agriculture" />
          </div>
          <div className="bg-subHeading flex items-center gap-3 p-5 w-fit rounded-md">
            <CategoryIcon sourc={WasteManagement} alter="Waste Management" />
            <SubHeading title="Waste Management" />
          </div>
          <div className="bg-subHeading flex items-center gap-3 p-5 w-fit rounded-md">
            <CategoryIcon
              sourc={SustainabFunda}
              alter="Sustainability and Fundamentals"
            />
            <SubHeading title="Sustainability and Fundamentals" />
          </div>
          <div className="bg-subHeading flex items-center gap-3 p-5 w-fit rounded-md">
            <CategoryIcon
              sourc={BiospheresEcosystems}
              alter="Biospheres And Ecosystems"
            />
            <SubHeading title="Biospheres And Ecosystems" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallangCategory;
