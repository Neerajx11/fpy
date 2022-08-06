import React from "react";
import FormatText from "../FormatText";
import s from "./HC6.module.css";

let card = {
  name: "UPI Register card",
  title: "Setup your UPI ID",
  formatted_title: {
    text: "Setup your {}",
    entities: [
      {
        text: "UPI ID",
        color: "#FF0000",
      },
    ],
  },
  description: "Register now and start UPI payments",
  formatted_description: {
    text: "Register now and start {}",
    entities: [
      {
        text: "UPI payments",
        color: "#00FF00",
      },
    ],
  },
  icon: {
    image_type: "ext",
    image_url:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/128x128/plain/shape_square.png",
  },
  url: "https://youtube.com/",
};

const Regular = () => {
  return <div></div>;
};

const HC6 = ({ data }) => {
  return (
    <div>
      HC6
      <FormatText data={card.formatted_description} />
      <FormatText data={card.formatted_title} />
    </div>
  );
};

export default HC6;
