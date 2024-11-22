import React from "react";
import Banner from "../../components/home/Banner";
import UserCount from "../../components/home/UserCount";
import Discover from "../../components/home/Discover";
import Learning from "../../components/home/Learning";

const Home = () => {
  return (
    <div className="bg-[#F7F9FC]">
      <Banner />
      <UserCount />
      <Discover />
      <Learning />
    </div>
  );
};

export default Home;
