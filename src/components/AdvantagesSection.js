import React from "react";
import "../style/style.css";
import logo from "../img/student1.png"

const AdvantagesSection = () => {
  return (
    <section className="section_two">
      <div className="wr">
        <p className="main_title_two">Наши преимущества</p>
        <div className="img_circle">
          <div className="img_card1">
            <div>
              <img src={logo} alt="Advantage" />
            </div>
            <div>
              <p className="card_title">3-х разовое питание</p>
              <p className="card_title2">
                Для комфортного времяпровождения в нашей школе, мы готовим вкусную и полезную еду 3 раза в день.
              </p>
            </div>
          </div>
          {/* Другие карточки */}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
