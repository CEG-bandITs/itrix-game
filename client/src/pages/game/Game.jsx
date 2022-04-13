import React, { useEffect, useState } from "react";
import "./Game.css";
import { SubmitAnswer ,GetQuestion} from "../../api_calls/Game";
import { GiDiamondTrophy } from "react-icons/gi";
import Menu from "../../components/menu/Menu";
import {AnswerBar,QuestionBar} from "./GameComponents"

function Game(props) {

  const [dimentions, SetDimentions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [data, changeData] = useState(null);

  const [error,handleError] = useState("");

  useEffect(() => {
   
    function HandleResize() {
      SetDimentions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    GetQuestion().then(res=>{
         
         let data__={};
         data__['level'] = res.data.level ;
         data__['questions'] = res.data.question.images;
         data__['hints'] = res.data.question.hints ;
         changeData(data__);
     
    }
     
      );
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
          <Menu /> {/* muthu's side bar*/}
        </span>

        <span className="trophy">
          {data!==null&&data['level']+1}
          <GiDiamondTrophy style={{ color: "yellow" }} />
        </span>

         {/*this div will be removed after adding modal*/ }
         <div style={{color:"red"}}>
           {error}
         </div>
      </div>
      {
        data===null ? "loading ..." :
            (dimentions.width <= 1300 )? 
            <>
             <QuestionBar data={data} for="Mobile" />
             <AnswerBar error={error} handleError={handleError} data={data} changeData={changeData} for="Mobile" />
            </>
           : <>
             <QuestionBar data={data}/>
             <AnswerBar error={error} handleError={handleError} data={data}  changeData={changeData} />
            </>
      }

      
     
    </div>
  );
}

export default Game;