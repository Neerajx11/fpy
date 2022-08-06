import React from "react";
import CardWrapper from "./CardWrapper";

const ContextualCards = ({ data = [] }) => {
  const list = data.map((el) => <CardWrapper key={el.id} cardGroup={el} />);

  return (
    <div>
      ContextualCards
      <div>{list}</div>
    </div>
  );
};

export default ContextualCards;
