import React from "react";
import Heading from "../utilities/Heading";
import Peragrap from "../utilities/Peragrap";
import ChallangeCard from "../ChallangeCard";
import PrimaryBTN from "../utilities/PrimaryBTN";

const FeaturedChallenges = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <Heading
          className="!text-heading text-center !text-[52px]"
          title="Featured Challenges"
        />
        <Peragrap
          className="!text-heading text-center my-5"
          title={
            <>
              Below you can find a selection of our educational challenges.
              <br />
              Read the educational briefing, take on the challenge and start
              earning your rewards.
            </>
          }
        />
        <div className="grid grid-cols-3  justify-between gap-8 py-10">
          <ChallangeCard />
        </div>
        <div className="text-center py-5">
          <PrimaryBTN title="explore all challange" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedChallenges;
