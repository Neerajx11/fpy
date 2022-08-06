import React from "react";

let card = [
  {
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
  },
];

const HC6 = ({ isScrollable }) => {
  return <div>HC6</div>;
};

export default HC6;
