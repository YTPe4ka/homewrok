import React from "react";
import "../style/style.css";
import fog from"../img/main_img1.png"

const MainSection = () => {
  return (
    <main className="main_section">
      <div className="main_items">
        <h1>
          <span>The Best Future Stars</span> - мы заботимся о будущем вашего ребенка
        </h1>
        <p className="main_p">
          Наши опытные преподователи сделают процесс обучения максимально интересным и эффективным для вашего ребенка.
        </p>
        <button className="btn1">Позвонить</button>
        <button className="btn2">Подробнее</button>
      </div>
      <div className="img_main">
        <img src={fog} alt="Main" />
      </div>
    </main>
  );
};

export default MainSection;
