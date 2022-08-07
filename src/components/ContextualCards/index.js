import React from "react";
import CardWrapper from "./CardWrapper";

const ContextualCards = ({ cardGroups = [] }) => {
  // maps cardGroups with wrapper
  const list = cardGroups.map((el) => (
    <CardWrapper key={el.id} cardGroup={el} />
  ));

  return <div>{list}</div>;
};

export default ContextualCards;
