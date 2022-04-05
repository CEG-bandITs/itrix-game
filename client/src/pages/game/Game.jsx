import React, { useEffect, useState } from "react";
import style from "./Game.module.css";
import { AnswerBar, QuestionBar } from "./GameComponents";

function Game(props) {
  const [dimentions, SetDimentions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [data, changeData] = useState({
    level: 0,
    questions: [],
    hint: {},
  });

  useEffect(() => {
    function HandleResize() {
      SetDimentions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", HandleResize);
    return () => {
      window.removeEventListener("resize", HandleResize);
    };

    //get the game question

    /*
    data = {
      question_1 : ... ,
      
    }
    */
  }, []);

  return (
    <div className={style.GamePage}>
      {dimentions.width <= 1300 ? (
        <QuestionBar for="Mobile" />
      ) : (
        <QuestionBar />
      )}
      {dimentions.width <= 1300 ? <AnswerBar for="Mobile" /> : <AnswerBar />}
    </div>
  );
}

export default Game;
