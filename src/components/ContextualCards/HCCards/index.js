import React from "react";
import HC1 from "./HC1";
import HC3 from "./HC3";
import HC5 from "./HC5";
import HC6 from "./HC6";
import HC9 from "./HC9";

const NameToComp = {
  HC1: HC1,
  HC3: HC3,
  HC5: HC5,
  HC6: HC6,
  HC9: HC9,
};

const HCCards = ({ card, designType, scrollMultiple, noScrollMultiple }) => {
  const CompToRender = NameToComp[designType];
  return React.createElement(CompToRender, {
    card,
    scrollMultiple,
    noScrollMultiple,
  });
};

export default HCCards;
