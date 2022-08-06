import React from "react";
import s from "./Skeleton.module.css";

const Skeleton = () => {
  return (
    <div className={s.main}>
      <div className={`${s.sqr} ${s.base}`}>
        <div className={`${s.img} ${s.gray}`}></div>
        <div className={`${s.btn} ${s.gray}`}></div>
      </div>
      <div className={`${s.base} ${s.rect}`}></div>
      <div className={`${s.base} ${s.rect} ${s.icoDiv}`}>
        <div className={`${s.icon} ${s.gray}`}></div>
        <div className={`${s.icon} ${s.gray}`}></div>
        <div className={`${s.icon} ${s.gray}`}></div>
      </div>
      <div className={`${s.sqr} ${s.base} ${s.btm}`}>
        <div className={`${s.img} ${s.gray}`}></div>
      </div>
    </div>
  );
};

export default Skeleton;
