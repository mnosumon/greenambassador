import React from "react";
import Banner from "../../components/home/Banner";
import UserCount from "../../components/home/UserCount";

const Home = () => {
  return (
    <div className="bg-[#F7F9FC]">
      <Banner />
      <UserCount />
    </div>
  );
};

export default Home;
