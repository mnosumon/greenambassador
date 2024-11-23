import React from "react";
import Banner from "../../components/home/Banner";
import UserCount from "../../components/home/UserCount";
import Discover from "../../components/home/Discover";
import Learning from "../../components/home/Learning";
import RealWorld from "../../components/home/RealWorld";
import ChallangCategory from "../../components/home/ChallangCategory";
import FeaturedChallenges from "../../components/home/FeaturedChallenges";
import BlockChainPowered from "../../components/home/BlockChainPowered";
import Loop from "../../components/home/Loop";

const Home = () => {
  return (
    <div className="bg-[#F7F9FC]">
      <Banner />
      <UserCount />
      <Discover />
      <Learning />
      <RealWorld />
      <ChallangCategory />
      <FeaturedChallenges />
      <BlockChainPowered />
      <Loop />
    </div>
  );
};

export default Home;
