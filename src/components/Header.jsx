import React from "react";
import logo from "../logo.svg";

import "./header.css";

function Header({ buuttnText }) {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="header-btn">
        <p>{buuttnText}</p>
      </div>
    </div>
  );
}

export default Header;
