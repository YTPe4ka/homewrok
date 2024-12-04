import React from "react";
import "../style/style.css";
import logo from "../img/school.png"
const ContactSection = () => {
  return (
    <section className="main-container">
      <h1>Связаться</h1>
      <h2>Связаться с нами</h2>
      <div className="contact-info-form">
        <div className="info-section">
          <h3>Контакты</h3>
          <div>
            <p>г. Ташкент, Чиланзар</p>
            <p>+998970020771</p>
          </div>
          <img src={logo} alt="School" />
        </div>
        <div className="form-section">
          <h3>Оставьте заявку</h3>
          <form>
            <input type="text" name="name" placeholder="Имя" />
            <textarea name="message" placeholder="Сообщение"></textarea>
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
