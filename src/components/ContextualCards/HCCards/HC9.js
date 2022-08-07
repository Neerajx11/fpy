import React from "react";

import s from "./HC9.module.css";

const HC9 = ({ card, height }) => {
  // calculating width = aspect_ratio * height
  let width = (card.bg_image.aspect_ratio || 1) * height;
  return (
    <a
      href={card.url}
      target="_blank"
      rel="noreferrer"
      className={`${s.box} box-shadow`}
      style={{
        minHeight: height,
        backgroundImage: `url(${card.bg_image.image_url})`,
        minWidth: width,
      }}
    >
      {/* invisible text */}
      <p className={s.t1}>""</p>
    </a>
  );
};

export default HC9;
