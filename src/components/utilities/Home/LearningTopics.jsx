import React from "react";
import { TickMark } from "../../../assets/svg/TickMark";

const LearningTopics = ({ title }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-10 h-10 bg-[#009b722c] rounded-full overflow-hidden flex items-center justify-center">
        <TickMark />
      </div>
      <h4 className="text-xl leading-8 font-medium font-nunito text-heading">
        {title}
      </h4>
    </div>
  );
};

export default LearningTopics;
