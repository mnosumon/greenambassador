import React from "react";
import ChallagneBanner from "../../components/challange/ChallagneBanner";
import ChallangeListOverview from "../../components/challange/ChallangeListOverview";
import ChallangCategory from "../../components/home/ChallangCategory";
import FeaturedChallenges from "../../components/home/FeaturedChallenges";

const Challange = () => {
  return (
    <div className="bg-[#F7F9FC]">
      <ChallagneBanner />
      <ChallangeListOverview />
      <ChallangCategory />
      <FeaturedChallenges />
    </div>
  );
};

export default Challange;
