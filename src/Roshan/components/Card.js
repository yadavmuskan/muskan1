import React from "react";
import "../../index.css";

export default function Card({
  Icon,
  color,
  background,
  bgColor,
  value,
  text,
  Arrow,
  textCol,
  arrowCol,
}) {
  return (
    <div
      className="card_body m-auto all_space_between"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="icon_layout all_center"
        style={{ backgroundColor: background }}
      >
        <Icon className="icon_size" color={color} />
      </div>
      <div className=" py-2">
        <h3 style={{ color: textCol }}>{value}</h3>
        <h6 style={{ color: textCol }}>{text}</h6>
      </div>
      <div className="all_end">
        <div className="px-4">
          <Arrow className="icon_size" color={arrowCol} />
        </div>
      </div>
    </div>
  );
}
