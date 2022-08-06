import React from "react";
import CardWrapper from "./CardWrapper";
import HCCards from "./HCCards";

const ContextualCards = ({ data = [] }) => {
  const list = data.map((el) => (
    <CardWrapper key={el.id} isScrollable={el.is_scrollable}>
      <HCCards cardGroup={el} />
    </CardWrapper>
  ));

  return (
    <div>
      <div>ContextualCards</div>
      <div>{list}</div>
    </div>
  );
};

export default ContextualCards;
