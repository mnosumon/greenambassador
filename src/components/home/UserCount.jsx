import React from "react";
import Heading from "../utilities/Heading";
import Peragrap from "../utilities/Peragrap";

const UserCount = () => {
  return (
    <div className="bg-[#F7F9FC] py-20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-[30%] p-10 bg-subHeading shadow-md rounded-md text-center">
          <Heading className="!text-[56px] mb-3 !text-primary" title="62,100" />
          <Peragrap
            className="!text-textColor"
            title="Active Green Ambassadors"
          />
        </div>
        <div className="w-[30%] p-10 bg-subHeading shadow-md rounded-md text-center">
          <Heading className="!text-[56px] mb-3 !text-primary" title="1,280" />
          <Peragrap
            className="!text-textColor"
            title="Hours spent learning yesterday"
          />
        </div>
        <div className="w-[30%] p-10 bg-subHeading shadow-md rounded-md text-center">
          <Heading className="!text-[56px] mb-3 !text-primary" title="$7500" />
          <Peragrap
            className="!text-textColor"
            title="Rewards paid out last week"
          />
        </div>
      </div>
    </div>
  );
};

export default UserCount;
