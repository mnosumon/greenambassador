import React from "react";

const Peragrap = ({ className, title }) => {
  return (
    <p className={`text-xl leading-8 font-nunito text-subHeading ${className}`}>
      {title}
    </p>
  );
};

export default Peragrap;
