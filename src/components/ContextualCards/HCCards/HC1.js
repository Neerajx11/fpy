import React from "react";
import FormatText from "../FormatText";
import s from "./HC1.module.css";

const HC1 = ({ card, scrollMultiple }) => {
  return (
    <a
      href={card.url}
      target="_blank"
      rel="noreferrer"
      style={{ backgroundColor: card.bg_color }}
      className={`${s.box} ${scrollMultiple && s.fullWidth} box-shadow`}
    >
      <img className={s.img} src={card.icon.image_url} alt="" />
      {/* 3rd condition */}
      <div className={`${s.body}`}>
        <FormatText className={s.t1} data={card.formatted_title} />
      </div>
    </a>
  );
};

export default HC1;
