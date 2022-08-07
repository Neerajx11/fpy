import React from "react";
import { v4 } from "uuid";

const SpecialText = ({ color, text, extraText }) => (
  <span style={{ color: color }}>
    {text}
    {extraText}{" "}
  </span>
);

const FormatText = ({ formattedText, fallback, className = "" }) => {
  // fallback text
  if (!formattedText) {
    return <p className={className}>{fallback}</p>;
  }

  // splitting sentence into words
  let final = formattedText.text.split(" ");
  let i = -1;

  let res = final.map((el) => {
    // checking for words starting with {}
    if (el[0] === "{" && el[1] === "}") {
      i++;
      return (
        <SpecialText
          key={v4()}
          color={formattedText.entities[i].color}
          text={formattedText.entities[i].text}
          extraText={el.substr(2)}
        />
      );
    }
    return <React.Fragment key={v4()}>{el} </React.Fragment>;
  });

  return <p className={className}>{res}</p>;
};

export default FormatText;
