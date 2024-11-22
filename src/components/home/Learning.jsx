import React from "react";
import Heading from "../utilities/Heading";
import Peragrap from "../utilities/Peragrap";
import LearningTopics from "../utilities/Home/LearningTopics";
import { Blob1Icon } from "../../assets/svg/Blob1Icon";
import LearningImg from "../../assets/image/learning.png";

const Learning = () => {
  return (
    <section>
      <div className="container py-20 mx-auto flex justify-between gap-10">
        <div className="w-1/2 h-[60vh] relative">
          <div className="absolute top-0 -left-[10%] w-full h-full">
            <Blob1Icon />
          </div>
          <div className="w-1/2  absolute -top-[10%] left-[15%]">
            <img className="w-full h-auto" src={LearningImg} alt="" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-4/5">
            <Heading className="!text-heading" title="Learning Made Fun" />
            <Peragrap
              className="text-textColor my-8"
              title="All our challenges consists out of multiple learning activities ranging from reading an article to watching a video."
            />
            <Peragrap
              className="text-textColor mb-8"
              title="Pass the multiple choice test at the end of the challenge as proof of your newly gained knowledge."
            />
            <div className="flex gap-3 items-center">
              <div className="flex flex-col gap-5">
                <LearningTopics title="Completely Free" />
                <LearningTopics title="Fun and Exciting" />
              </div>
              <div className="flex flex-col gap-5">
                <LearningTopics title="Test your Knowledge" />
                <LearningTopics title=" Backed by Science" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
