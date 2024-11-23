import React from "react";
import Heading from "../utilities/Heading";
import Peragrap from "../utilities/Peragrap";
import ChallangeCard from "../ChallangeCard";

const FeaturedChallenges = () => {
  return (
    <section>
      <div className="container mx-auto">
        <Heading
          className="!text-heading text-center"
          title="Featured Challenges"
        />
        <Peragrap
          className="!text-heading text-center"
          title={
            <>
              Below you can find a selection of our educational challenges.
              <br />
              Read the educational briefing, take on the challenge and start
              earning your rewards.
            </>
          }
        />
        <div className="grid grid-cols-3 items-center justify-between py-10">
          <ChallangeCard />
        </div>
      </div>
    </section>
  );
};

export default FeaturedChallenges;
