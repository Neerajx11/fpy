import React from "react";
import FormatText from "../FormatText";

import Arrow from "../../../assets/arrow.png";
import s from "./HC6.module.css";

const HC6 = ({ card, scrollMultiple, noScrollMultiple }) => {
  return (
    <a
      href={card.url}
      target="_blank"
      rel="noreferrer"
      className={`${s.box} ${scrollMultiple && s.scrollShrink} ${
        noScrollMultiple && s.noScrollStyle
      } box-shadow`}
    >
      <img className={s.img} src={card.icon.image_url} alt="" />
      <div className={`${s.main} ${noScrollMultiple && "hide"}`}>
        <div className={s.body}>
          <FormatText
            className={s.t1}
            formattedText={card.formatted_description}
            fallback={card.description}
          />
          <FormatText
            className={s.t2}
            formattedText={card.formatted_title}
            fallback={card.title}
          />
        </div>
        <img src={Arrow} className={s.arrow} alt="" />
      </div>
    </a>
  );
};

export default HC6;
