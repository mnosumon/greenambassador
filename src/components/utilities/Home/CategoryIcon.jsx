import React from "react";

const CategoryIcon = ({ sourc, alter }) => {
  return (
    <div className="w-10 h-10 overflow-hidden">
      <img className="w-full h-full object-cover" src={sourc} alt={alter} />
    </div>
  );
};

export default CategoryIcon;
