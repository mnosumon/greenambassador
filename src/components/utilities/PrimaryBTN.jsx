import React from "react";

const PrimaryBTN = ({ className, title }) => {
  return (
    <button
      className={`px-8 py-5 bg-primary text-subHeading text-xl font-bold font-nunito hover:bg-hoverColor transition-all ease-in-out duration-300 rounded-full capitalize ${className}`}
    >
      {title}
    </button>
  );
};

export default PrimaryBTN;
