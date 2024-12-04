import React from "react";
import "../style/style.css";
import school from "../img/school.png";
const AboutSection = () => {
  return (
    <section className="page_one">
      <div className="wrapper">
        <div className="img_sec_one">
          <img src={school} alt="School" />
        </div>
        <div className="title_section_one">
          <p className="title_section">О нас</p>
          <p className="p_section">
            Для комфортного образования и времяпровождения, мы объединяем детей
            небольшими комфортными группами, которые разделяются по возрастным
            категориям, а также и по образовательным направлениям.
          </p>
          <p className="psection">Все условия и комфорт для ваших детей!</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
