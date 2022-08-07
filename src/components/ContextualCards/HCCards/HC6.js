import React from "react";
import FormatText from "../FormatText";
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
      {/* 3rd condition */}
      <div className={`${s.body} ${noScrollMultiple && "hide"}`}>
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
    </a>
  );
};

export default HC6;
