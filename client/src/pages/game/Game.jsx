import React, { useEffect, useState } from "react";
import GameStyle from "./Game.module.css";

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
  hints: [
    { id: 1, msg: "An Actor" },
    { id: 2, msg: "Asian" },
  ],
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
      <div className={GameStyle.QuestionBar}>
        <img
          className={GameStyle.prevIcon}
          src="images/right.png"
          alt="right image"
          onClick={IncreaseImgPointer}
        />
        <img
          className={GameStyle.QuestionImg}
          src={data.images[ImgPointer].url}
        ></img>
        <img
          className={GameStyle.nextIcon}
          src="images/right.png"
          alt="left image"
          onClick={DecreaseImgPointer}
        />
      </div>
    );
  } else {
    return (
      <div className={GameStyle.QuestionBar}>
        {data.images.map((i) => {
          return (
            <img
              src={i.url}
              key={i.id}
              className={GameStyle.QuestionImg}
              alt="Question Image"
            />
          );
        })}
      </div>
    );
  }
}

function HintBox(props) {
  if (props.show === true) {
    return (
      <>
        <div
          className="GreyLayer"
          onClick={() => {
            props.setShowHint(false);
          }}
        ></div>
        <div className="HintBox">
          {data.hints.map((i) => {
            return (
              <>
                <p key={i.id}>
                  Hint {i.id}: &nbsp;&nbsp; {i.msg}
                </p>
              </>
            );
          })}
        </div>
      </>
    );
  } else {
    return <></>;
  }
}

function AnswerBar(props) {
  const [showHint, setShowHint] = useState(false);
  if (props.for === "Mobile") {
    return (
      <>
        <div className={GameStyle.AnswerBar}>
          <form>
            <input
              className={GameStyle.AnswerBarInput}
              type="text"
              placeholder="Enter Answer"
            ></input>
            <div className={GameStyle.AnswerBarBottom}>
              <button
                className={GameStyle.AnswerBarHint}
                onClick={(e) => {
                  e.preventDefault();
                  setShowHint(true);
                }}
              >
                Hint
                <img
                  className={GameStyle.AnswerBarIcon}
                  src="images/idea-icon.png"
                />
              </button>
              <button className={GameStyle.AnswerBarSubmit}>submit</button>
            </div>
          </form>
        </div>
        <HintBox show={showHint} setShowHint={setShowHint} />
      </>
    );
  } else {
    return (
      <>
        <div className={GameStyle.AnswerBar}>
          <form className={GameStyle.AnswerBarOnelineBottom}>
            <button className={GameStyle.AnswerBarHint}>
              <p>Hint</p>
              <img
                className={GameStyle.AnswerBarIcon}
                src="images/idea-icon.png"
                onClick={(e) => {
                  e.preventDefault();
                  setShowHint(true);
                }}
              />
            </button>
            <input type="text" placeholder="Enter Answer"></input>
            <button className={GameStyle.AnswerBarSubmit}>submit</button>
          </form>
        </div>
        <HintBox show={showHint} setShowHint={setShowHint} />
      </>
    );
  }
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
    <div className={GameStyle.GamePage}>
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
