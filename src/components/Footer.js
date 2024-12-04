import React from "react";
import "../style/style.css";
import logo from "../img/logo (6).svg"

const Footer = () => {
  return (
    <footer>
      <div className="img">
        <img src={logo} alt="Logo" />
      </div>
      <div className="wrap">
        <p>Контакты:</p>
        <p>+998971970771</p>
      </div>
    </footer>
  );
};

export default Footer;
