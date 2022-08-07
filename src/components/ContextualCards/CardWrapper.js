import React, { useState } from "react";
import HCCards from "./HCCards";
import { v4 } from "uuid";

import s from "./CardWrapper.module.css";

const CardWrapper = ({ cardGroup }) => {
  // used for hiding HC3 cards when they are dismissed
  const [HC3Blacklist, setHC3Blacklist] = useState([]);

  // help in changing styles
  let scrollMultiple =
      cardGroup.cards.length === 1 ? false : cardGroup.is_scrollable,
    noScrollMultiple =
      cardGroup.cards.length === 1 ? false : !cardGroup.is_scrollable;

  const list = cardGroup.cards.map((el) => (
    <HCCards
      key={v4()}
      card={el}
      height={cardGroup.height || 0}
      designType={cardGroup.design_type}
      scrollMultiple={scrollMultiple}
      noScrollMultiple={noScrollMultiple}
      blacklist={HC3Blacklist}
      setBlacklist={setHC3Blacklist}
    />
  ));

  return (
    <div
      className={`${s.main} ${scrollMultiple && s.scroll} ${
        noScrollMultiple && s.noScroll
      }`}
    >
      {list}
    </div>
  );
};

export default CardWrapper;
