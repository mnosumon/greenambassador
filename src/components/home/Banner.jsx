import React from "react";
import Heading from "../utilities/Heading";
import Peragrap from "../utilities/Peragrap";
import PrimaryBTN from "../utilities/PrimaryBTN";

const Banner = () => {
  return (
    <section className="w-full bg-gradient-to-r pt-16 from-[#009b72] to-[#046865]">
      <div className="container mx-auto py-20 grid grid-cols-2 items-start gap-10">
        <div className="w-[90%]">
          <iframe
            className="rounded w-full h-[300px]"
            src="https://www.youtube.com/embed/WKoK1dwfdrM?si=zENgxaXdQkK1CqDX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-[90%]">
          <Heading title="Sustainability Education made Fun and Rewarding" />
          <Peragrap
            className="mb-10 mt-6"
            title="We believe you can become an Ambassador for a Greener World, by making informed, eco-friendly decisions every day."
          />
          <PrimaryBTN
            className="!bg-[#213239] hover:!bg-[#091012]"
            title="join - it's free"
          />
        </div>
      </div>
      <div class="w-full relative h-[5vw] pointer-events-none bg-[#F7F9FC] custom-mask"></div>
    </section>
  );
};

export default Banner;
