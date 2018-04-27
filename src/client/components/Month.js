import React from "react";

const Month = ({ month, days, image }) => {
  let className = `list-item ${image}`;
  return (
    <div className={className}>
      <h3 className="list-item__title">{month}</h3>
      <h3 className="list-item__data">{days}</h3>
    </div>
  );
};

export default Month;
