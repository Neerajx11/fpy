import React from "react";
import Skeleton from "../Skeleton";

const CardWrapper = ({ data = [] }) => {
  if (!data.length) return <Skeleton />;
  return <div>CardWrapper</div>;
};

export default CardWrapper;
