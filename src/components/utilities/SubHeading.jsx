import React from "react";

const SubHeading = ({ title, className }) => {
  return (
    <h3
      className={`capitalize text-heading text-xl font-bold font-nunito leading-[1.2] ${className}`}
    >
      {title}
    </h3>
  );
};

export default SubHeading;
