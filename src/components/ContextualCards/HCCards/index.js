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

// master component takes data and render card accordingly
const HCCards = ({
  card,
  designType,
  scrollMultiple,
  noScrollMultiple,
  height,
  blacklist,
  setBlacklist,
}) => {
  const CompToRender = NameToComp[designType];
  const normal = {
    card,
    scrollMultiple,
    noScrollMultiple,
    height,
  };
  const HC3Props = {
    blacklist,
    setBlacklist,
  };

  let props = normal;

  // only add blacklist props if design type is HC3
  if (designType === "HC3") props = { ...props, ...HC3Props };

  return React.createElement(CompToRender, props);
};

export default HCCards;
