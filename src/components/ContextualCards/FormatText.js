import React from "react";

const SpecialText = ({ color, text }) => (
  <span style={{ color: color }}>{text} </span>
);

const FormatText = ({ data }) => {
  let final = data.text.split(" ");
  let i = -1;
  let res = final.map((el) => {
    if (el === "{}") {
      i++;
      return (
        <SpecialText
          color={data.entities[i].color}
          text={data.entities[i].text}
        />
      );
    }
    return <>{el} </>;
  });

  console.log(res);

  return <div>{res}</div>;
};

export default FormatText;
