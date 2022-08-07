import React from "react";

import s from "./Navbar.module.css";
import NavIcon from "../../assets/navIcon.svg";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <img className={s.icon} src={NavIcon} alt="nav icon" />
      <div className={s.logo}>
        <span>fampay</span>
        <img src={Logo} alt="fampay logo" />
      </div>
    </nav>
  );
};

export default Navbar;
