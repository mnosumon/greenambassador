import React from "react";
import Heading from "../utilities/Heading";
import Peragrap from "../utilities/Peragrap";
import PrimaryBTN from "../utilities/PrimaryBTN";

const Discover = () => {
  return (
    <section>
      <div className="container mx-auto flex justify-between">
        <div className="w-1/2">
          <Heading
            className="text-heading"
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
            className="bg-transparent text-primary hover:bg-transparent hover:text-hoverColor !p-0"
            title="Explore Challenges"
          />
        </div>
        <div className="w-1/2">
          <div className="w-96 h-96 bg-primary opacity-90 mask-blob-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
