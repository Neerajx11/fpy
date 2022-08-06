import React from "react";
import s from "./StatusBar.module.css";

const StatusBar = ({ err }) => {
  return (
    <>
      {err && (
        <div className={s.err}>Error : Unable to fetch data. Try again :\</div>
      )}
    </>
  );
};

export default StatusBar;
