import React from "react";

const Heading = ({ className, title }) => {
  return (
    <h2
      className={`text-[42px] leading-[52px] tracking-[-0.02em] font-bold font-nunito text-subHeading ${className}`}
    >
      {title}
    </h2>
  );
};

export default Heading;
