import React, { useEffect, useState } from "react";
import "./Game.css";

let data = {
  images: [
    {
      id: 1,
      url: "images/test_image.jpg",
    },
    {
      id: 2,
      url: "images/right.png",
    },
    {
      id: 3,
      url: "images/idea-icon.png",
    },
  ],
  hints: ["An Actor", "Asian"],
};

function QuestionBar(props) {
  const [ImgPointer, SetImgPointer] = useState(0);
  function IncreaseImgPointer() {
    if (ImgPointer >= data.images.length - 1) {
      SetImgPointer(0);
    } else {
      SetImgPointer(ImgPointer + 1);
    }
  }
  function DecreaseImgPointer() {
    if (ImgPointer <= 0) {
      SetImgPointer(data.images.length - 1);
    } else {
      SetImgPointer(ImgPointer - 1);
    }
  }
  if (props.for === "Mobile") {
    return (
      <div className="QuestionBar">
        <img
          className="prev-icon"
          src="images/right.png"
          alt="right image"
          onClick={IncreaseImgPointer}
        />
        <img className="Question-Img" src={data.images[ImgPointer].url}></img>
        <img
          className="next-icon"
          src="images/right.png"
          alt="left image"
          onClick={DecreaseImgPointer}
        />
      </div>
    );
  } else {
    return (
      <div className="QuestionBar">
        {data.images.map((i) => {
          return (
            <img
              src={i.url}
              key={i.id}
              className="Question-Img"
              alt="Question Image"
            />
          );
        })}
      </div>
    );
  }
}

function AnswerBar(props) {
  if (props.for === "Mobile") {
    return (
      <div className="AnswerBar">
        <form>
          <input
            className="AnswerBar-Input"
            type="text"
            placeholder="Enter Answer"
          ></input>
          <div className="AnswerBar-Bottom">
            <button className="AnswerBar-Hint">
              Hint
              <img className="AnswerBar-Icon" src="images/idea-icon.png" />
            </button>
            <button className="AnswerBar-Submit">submit</button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="AnswerBar">
        <form className="AnswerBar-Oneline-Bottom">
          <button className="AnswerBar-Hint">
            <p>Hint</p>
            <img className="AnswerBar-Icon" src="images/idea-icon.png" />
          </button>
          <input type="text" placeholder="Enter Answer"></input>
          <button className="AnswerBar-Submit">submit</button>
        </form>
      </div>
    );
  }
}

function HintBox(props) {
  return <div>{data.hint}</div>;
}

function Game(props) {
  const [dimentions, SetDimentions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
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
  }, []);

  return (
    <div className="GamePage">
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
