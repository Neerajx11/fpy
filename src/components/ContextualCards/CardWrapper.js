import React from "react";
import HCCards from "./HCCards";

const CardWrapper = ({ cardGroup }) => {
  return (
    <div>
      <HCCards
        variant={cardGroup.design_type}
        isScrollable={cardGroup.is_scrollable}
      />
    </div>
  );
};

export default CardWrapper;
