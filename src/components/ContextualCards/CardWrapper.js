import React from "react";
import s from "./CardWrapper.module.css";
import HCCards from "./HCCards";
import { v4 } from "uuid";

const CardWrapper = ({ cardGroup }) => {
  let scrollMultiple =
      cardGroup.cards.length === 1 ? false : cardGroup.is_scrollable,
    noScrollMultiple =
      cardGroup.cards.length === 1 ? false : !cardGroup.is_scrollable;

  const list = cardGroup.cards.map((el) => (
    <HCCards
      key={v4()}
      card={el}
      designType={cardGroup.design_type}
      scrollMultiple={scrollMultiple}
      noScrollMultiple={noScrollMultiple}
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
