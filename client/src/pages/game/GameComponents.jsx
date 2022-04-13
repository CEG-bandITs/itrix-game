import React, { useState } from "react";
import style from "./Game.module.css";
import { SubmitAnswer } from "../../api_calls/Game";

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
    {
      id: 4,
      url: "images/idea-icon.png",
    },
  ],
  hints: [
    { id: 1, msg: "An Actor" },
    { id: 2, msg: "Asian" },
  ],
};

export function QuestionBar(props) {
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
      <div className={style.QuestionBar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-caret-left-fill"
          viewBox="0 0 16 16"
          onClick={() => DecreaseImgPointer()}
        >
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
        </svg>
        <img
          className={style.QuestionImg}
          src={data.images[ImgPointer].url}
        ></img>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-caret-right-fill"
          viewBox="0 0 16 16"
          onClick={() => IncreaseImgPointer()}
        >
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      </div>
    );
  } else {
    return (
      <div className={style.QuestionBar}>
        {data.images.map((i) => {
          return (
            <img
              src={i.url}
              key={i.id}
              className={style.QuestionImg}
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
          className={style.GreyLayer}
          onClick={() => {
            props.setShowHint(false);
          }}
        ></div>
        <div className={style.HintBox}>
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

export function AnswerBar(props) {
  const [showHint, setShowHint] = useState(false);
  if (props.for === "Mobile") {
    return (
      <>
        <div className={style.AnswerBar}>
          <form>
            <input
              className={style.AnswerBarInput}
              type="text"
              placeholder="Enter Answer"
            ></input>
            <div className={style.AnswerBarBottom}>
              <button
                className={style.AnswerBarHint}
                onClick={(e) => {
                  e.preventDefault();
                  setShowHint(true);
                }}
              >
                Hint
                <img
                  className={style.AnswerBarIcon}
                  src="images/idea-icon.png"
                />
              </button>
              <button
                type="button"
                className={style.AnswerBarSubmit}
                onClick={SubmitAnswer}
              >
                submit
              </button>
            </div>
          </form>
        </div>
        <HintBox show={showHint} setShowHint={setShowHint} />
      </>
    );
  } else {
    return (
      <>
        <div className={style.AnswerBar}>
          <div className={style.AnswerBarOnelineBottom}>
            <button className={style.AnswerBarHint}>
              <p>Hint</p>
              <img
                className={style.AnswerBarIcon}
                src="images/idea-icon.png"
                onClick={(e) => {
                  e.preventDefault();
                  setShowHint(true);
                }}
              />
            </button>
            <input type="text" placeholder="Enter Answer"></input>
            <button className={style.AnswerBarSubmit} type="button">
              submit
            </button>
          </div>
        </div>
        <HintBox show={showHint} setShowHint={setShowHint} />
      </>
    );
  }
}
