import React, { useState } from "react";
import Heading from "../utilities/Heading";
import Peragrap from "../utilities/Peragrap";
import PrimaryBTN from "../utilities/PrimaryBTN";
import { useLocation } from "react-router-dom";
import Paginate from "../challangePaginate/ChallangeItemsPaginate";

const FeaturedChallenges = () => {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const location = useLocation();
  return (
    <section className="py-20">
      <div className="container mx-auto">
        {location.pathname === "/" ? (
          <>
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
          </>
        ) : (
          ""
        )}
        <Paginate itemsPerPage={itemsPerPage} />
        {location.pathname === "/" ? (
          <div className="text-center py-5">
            <PrimaryBTN title="explore all challange" />
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default FeaturedChallenges;
