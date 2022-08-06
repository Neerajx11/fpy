import React from "react";
import s from "./StatusBar.module.css";

const StatusBar = ({ isLoading, err }) => {
  if (isLoading) {
    return <div className={s.load}>Loading...</div>;
  }
  if (err) {
    return (
      <div className={s.err}>Error : Unable to fetch data. Try again :\</div>
    );
  }
  return <></>;
};

export default StatusBar;
