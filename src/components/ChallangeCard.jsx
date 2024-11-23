import React from "react";
import PrimaryBTN from "./utilities/PrimaryBTN";
import Heading from "./utilities/Heading";
import Peragrap from "./utilities/Peragrap";
import { TaskClip } from "../assets/svg/TaskClip";
import { Clock } from "../assets/svg/Clock";
import { challangeItem } from "../mapItem/challangeCard/CardObject";

const ChallangeCard = () => {
  return (
    <>
      {challangeItem.length > 0 ? (
        challangeItem.map((item, index) => (
          <div
            key={index}
            className="w-full rounded-md shadow-md overflow-hidden relative"
          >
            {/* Image Section */}
            <div className="w-full h-auto relative">
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt={item.title || "Challange Image"} // Fallback for alt
              />
              <PrimaryBTN
                className="absolute right-5 bottom-5 !px-3 !py-1 rounded-md !text-sm"
                title={item.isActive}
              />
            </div>

            {/* Content Section */}
            <div className="px-6 pb-20 box-border ">
              <PrimaryBTN
                className="!bg-[#009b722c] hover:!bg-primary text-primary hover:text-subHeading rounded-md !px-3 !py-1 !text-base"
                title={item.category}
              />
              <Heading
                className="!text-heading !text-3xl !leading-[1.2] mt-6 mb-3 cursor-pointer"
                title={item.title}
              />
              <Peragrap
                className="!text-heading !text-lg !leading-[1.3]"
                title={item.description}
              />
            </div>

            {/* Footer Section */}
            <div className="flex items-center justify-between px-6 py-3 box-border overflow-hidden absolute left-0 bottom-0 border-t border-lineColor w-full">
              <div className="flex items-center gap-2">
                <div className="text-primary">
                  <TaskClip />
                </div>
                <Peragrap
                  className="!text-heading !text-lg"
                  title={item.task}
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="text-primary">
                  <Clock />
                </div>
                <Peragrap
                  className="!text-heading !text-lg"
                  title={item.time}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-10">
          <Peragrap
            className="!text-lg !text-heading"
            title="No challenges available at the moment."
          />
        </div>
      )}
    </>
  );
};

export default ChallangeCard;
