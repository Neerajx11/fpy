import React from "react";
import CardWrapper from "./CardWrapper";

const ContextualCards = ({ cardGroups = [] }) => {
  // cards: [{…}]
  // design_type: "HC6"
  // id: 31
  // is_scrollable: false
  // name: "UPI Register HCG"

  const list = cardGroups.map((el) => (
    <CardWrapper key={el.id} cardGroup={el} />
  ));

  return <div>{list}</div>;
};

export default ContextualCards;
