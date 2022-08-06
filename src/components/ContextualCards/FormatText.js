import React from "react";
import { v4 } from "uuid";

const SpecialText = ({ color, text }) => (
  <span style={{ color: color }}>{text} </span>
);

const FormatText = ({ data, className = "" }) => {
  let final = data.text.split(" ");
  let i = -1;
  let res = final.map((el) => {
    if (el === "{}") {
      i++;
      return (
        <SpecialText
          key={v4()}
          color={data.entities[i].color}
          text={data.entities[i].text}
        />
      );
    }
    return <React.Fragment key={v4()}>{el} </React.Fragment>;
  });

  return <div className={className}>{res}</div>;
};

export default FormatText;
