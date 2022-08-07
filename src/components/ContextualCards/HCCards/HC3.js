import React, { useState } from "react";
import FormatText from "../FormatText";
import { useLongPress } from "../../../hooks/useLongPress";
import { v4 } from "uuid";

import s from "./HC3.module.css";
import Bell from "../../../assets/bell.svg";
import X from "../../../assets/x.svg";

const HC3 = ({ card, blacklist, setBlacklist }) => {
  // used for long press
  const [press, setPress, downHandler, upHandler] = useLongPress();

  // used to hide card when remind later is clicked, reset after refresh
  const [remindLater, setRemindLater] = useState(false);
  const remindHandler = () => setRemindLater(true);

  // if the card is blacklisted listed return nothing
  const isBlacklisted = blacklist.includes(card.name);
  if (isBlacklisted) return <></>;

  // if we dimissed a card
  const addToBlackList = (name) => setBlacklist((prev) => [...prev, name]);

  // cancel the sliding of the card
  const baseClickHandler = (e) => {
    e.stopPropagation();
    setPress(false);
  };

  // STYLING and RENDERING of cards

  // calculate height of the card with help of aspect ratio
  // card has 100% width, so h = w/aspect_ratio
  let height = 100 / (card.bg_image.aspect_ratio || 1);
  const cardBaseStyle = {
    backgroundColor: card.bg_color,
    backgroundImage: `url(${card.bg_image.image_url})`,
    height: `${height}%`,
  };

  // cta button styles, used map because we can have multiple buttons
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
      {/* side buttons */}
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
