import React from "react";
import logo from "../logo.svg";

import "./header.css";
import { useNavigate } from "react-router-dom";

function Header({ buuttnText }) {
  const navigate = useNavigate();

  const goToUrl = (url) => {
    if (url === "Sign Up") navigate(`/signup`);
    else if (url === "Logout" || url === "Login") navigate(`/login`);
    else if (url === "Home") navigate("/");
    else if (url === "about-us") navigate("/about-us");
    else if (url === "contact-us") navigate("/contact-us");
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="nav-list">
        <p onClick={() => goToUrl("Home")}>Home</p>
        <p onClick={() => goToUrl("about-us")}>About Us</p>
        <p onClick={() => goToUrl("contact-us")}>Contact Us</p>
      </div>

      <div className="header-btn">
        <p onClick={() => goToUrl(buuttnText)}>{buuttnText}</p>
      </div>
    </div>
  );
}

export default Header;
