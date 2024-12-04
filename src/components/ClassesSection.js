import React from "react";
import "../style/style.css";
import logo from "../img/student_pic1.png"
const ClassesSection = () => {
  return (
    <section className="section_three">
      <h1 className="main_title_three">Классы</h1>
      <div className="p_title_three">
        <p>Классы</p>
      </div>
      <div className="wrapper3">
        <div className="card_student">
          <div className="card1_student">
            <div className="card_studentimg">
              <img src={logo} alt="Student" />
            </div>
            <p className="student_cardp1">1 классы</p>
            <p className="student_cardp2">6-7 лет</p>
            <p className="student_cardp3">
              Изучение калиграфии, логопедия, английский этикет, разговорный английский, общеобразовательные предметы и
              спортивные занятия.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
