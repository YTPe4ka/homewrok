// src/components/Header.jsx
import React from "react";
import "../style/style.css";
import logo from "../img/logo (6).svg"; 
import menuicon from "../img/bars-solid.svg"; 

const Header = () => {
  return (
    <header>
      <nav>
        <div className="img_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="href">
          <p>
            <a href="#">О нашей школе</a>
            <a href="#">Преимущества</a>
            <a href="#">Классы</a>
            <a href="#">Контакты</a>
          </p>
        </div>
        <label htmlFor="menu">
          <img className="menu_btn" width="40" src={menuicon} alt="Menu" />
        </label>
        <button className="btn">Связаться с нами</button>
      </nav>
    </header>
  );
};

export default Header;
