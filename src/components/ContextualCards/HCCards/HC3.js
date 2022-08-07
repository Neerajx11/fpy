import React, { useState } from "react";
import { v4 } from "uuid";
import { useLongPress } from "../../../hooks/useLongPress";
import FormatText from "../FormatText";
import s from "./HC3.module.css";

import Bell from "../../../assets/bell.png";
import X from "../../../assets/x.png";

const HC3 = ({ card, blacklist, setBlacklist }) => {
  const [press, setPress, downHandler, upHandler] = useLongPress();
  const [remindLater, setRemindLater] = useState(false);

  const isBlacklisted = blacklist.includes(card.name);
  if (isBlacklisted) return <></>;

  const addToBlackList = (name) => setBlacklist((prev) => [...prev, name]);

  const baseClickHandler = (e) => {
    e.stopPropagation();
    setPress(false);
  };

  const remindHandler = () => setRemindLater(true);

  let height = 100 / card.bg_image.aspect_ratio;
  const cardBaseStyle = {
    backgroundColor: card.bg_color,
    backgroundImage: `url(${card.bg_image.image_url})`,
    height: `${height}%`,
  };
  const ctaBtnList = card.cta.map((el) => {
    const btnStyle = {
      backgroundColor: el.bg_color,
      color: el.text_color,
    };
    return (
      <a
        href={el.url}
        style={btnStyle}
        className={s.btn}
        target="_blank"
        rel="noreferrer"
        key={v4()}
      >
        {el.text}
      </a>
    );
  });

  return (
    <div className={`${s.box} ${remindLater && s.hide}`}>
      <div
        style={cardBaseStyle}
        // for laptop/pc
        onMouseDown={downHandler}
        onMouseUp={upHandler}
        // for mobile
        onTouchStart={downHandler}
        onTouchEnd={upHandler}
        className={`${s.base} ${press && s.slide}`}
      >
        <div className={s.t1}>
          <FormatText
            formattedText={card.formatted_title}
            fallback={card.title}
          />
        </div>
        <div className={s.t2}>
          <FormatText
            formattedText={card.formatted_description}
            fallback={card.description}
          />
        </div>
        <div className={s.ctaCtr}>{ctaBtnList}</div>
      </div>
      <div className={s.backBase} onClick={baseClickHandler}>
        <div className={s.backBtn} onClick={remindHandler}>
          <img src={Bell} alt="remind later" />
          <span>remind later</span>
        </div>
        <div className={s.backBtn} onClick={() => addToBlackList(card.name)}>
          <img src={X} alt="dismiss now" />
          <span>dismiss now</span>
        </div>
      </div>
    </div>
  );
};

export default HC3;
