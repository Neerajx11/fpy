import React from "react";
import s from "./HC5.module.css";

const HC5 = ({ card, scrollMultiple, noScrollMultiple }) => {
  let height = 100 / card.bg_image.aspect_ratio;
  return (
    <a
      href={card.url}
      target="_blank"
      rel="noreferrer"
      style={{
        backgroundColor: card.bg_color,
      }}
      className={`${s.box} ${s.bg} ${scrollMultiple && s.fullWidth} box-shadow`}
    >
      <img
        src={card.bg_image.image_url}
        style={{ minHeight: `${height}%` }}
        alt=""
      />
    </a>
  );
};

export default HC5;
