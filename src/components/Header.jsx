import React from "react";
import logo from "../logo.svg";

import "./header.css";
import { useNavigate } from "react-router-dom";

function Header({ buuttnText }) {
  const navigate = useNavigate();

  const goToUrl = (url) => {
    if (url === "Sign Up") navigate(`signup`);
    else if (url === "Logout" || url === "Login") navigate(`/`);
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="header-btn">
        <p onClick={() => goToUrl(buuttnText)}>{buuttnText}</p>
      </div>
    </div>
  );
}

export default Header;
