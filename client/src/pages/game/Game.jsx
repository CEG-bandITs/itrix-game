import React, { useEffect, useState } from "react";
import "./Game.css";
import { SubmitAnswer } from "../../api_calls/Game";
import { GiDiamondTrophy } from "react-icons/gi";
import Menu from "../../components/menu/Menu";
import {AnswerBar,QuestionBar} from "./GameComponents"

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
    <div className="GamePage">
      <div className="game__nav">
        <span className="game__menu">
          <Menu />
        </span>
        <span className="trophy">
          1
          <GiDiamondTrophy style={{ color: "yellow" }} />
        </span>
      </div>
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