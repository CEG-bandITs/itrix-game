import React, { useState } from 'react'
import './Game.css'
import { SubmitAnswer } from '../../api_calls/Game'
import { Container } from './Game.jsx'
import PropTypes from 'prop-types'

export function QuestionBar(props) {
  const [ImgPointer, SetImgPointer] = useState(0)
  const value = React.useContext(Container)
  const data = { images: value.data.questions, hints: value.data.hints }

  function IncreaseImgPointer() {
    if (ImgPointer >= data.images.length - 1) {
      SetImgPointer(0)
    } else {
      SetImgPointer(ImgPointer + 1)
    }
  }
  function DecreaseImgPointer() {
    if (ImgPointer <= 0) {
      SetImgPointer(data.images.length - 1)
    } else {
      SetImgPointer(ImgPointer - 1)
    }
  }
  if (props.for === 'Mobile') {
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
    )
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
          )
        })}
      </div>
    )
  }
}

QuestionBar.propTypes = {
  for: PropTypes.string,
}

function HintBox(props) {
  if (props.show === true) {
    return (
      <>
        <div
          className="GreyLayer"
          onClick={() => {
            props.setShowHint(false)
          }}
        ></div>
        <div className="HintBox">
          {props.hints.map((i) => {
            return (
              <>
                <p key={i.id}>
                  Hint {i.id}: &nbsp;&nbsp; {i.msg}
                </p>
              </>
            )
          })}
        </div>
      </>
    )
  } else {
    return <></>
  }
}

HintBox.propTypes = {
  show: PropTypes.bool,
  setShowHint: PropTypes.func,
  hints: PropTypes.array,
}

/*
  data:{question:Questions[level+1],level:(level+1)}}
*/

export function AnswerBar(props) {
  const [showHint, setShowHint] = useState(false)
  const [answer, handleAnswer] = useState('')
  const [disableButton, handleDisableButton] = useState(false)
  const value = React.useContext(Container)

  function Submit__() {
    if (answer.trim().length !== 0) {
      handleDisableButton(true)
      SubmitAnswer({ level: value.data.level, answer }).then((resp) => {
        handleDisableButton(false)
        console.log(resp)

        if (resp.message === 'success') {
          const temp = resp.data
          const data__ = {
            level: temp.level,
            hints: temp.question.hints,
            questions: temp.question.images,
          }
          value.changeData(data__)
          handleAnswer('')
          value.handleError(resp.message)
        } else {
          handleDisableButton(false)
          value.handleError(resp.message)
        }
      })
    } else value.handleError("Answer Can't Be Empty")
  }
  if (props.for === 'Mobile') {
    return (
      <>
        <div className="AnswerBar">
          <form>
            <input
              className="AnswerBar-Input"
              type="text"
              value={answer}
              onChange={(e) => {
                handleAnswer(e.target.value)
              }}
              placeholder="Enter Answer"
            ></input>
            <div className="AnswerBar-Bottom">
              <button
                className="AnswerBar-Hint"
                onClick={(e) => {
                  e.preventDefault()
                  setShowHint(true)
                }}
              >
                Hint
                <img className="AnswerBar-Icon" src="images/idea.jpg" />
              </button>
              <button
                disabled={disableButton}
                type="button"
                className="AnswerBar-Submit"
                onClick={Submit__}
              >
                submit
              </button>
            </div>
          </form>
        </div>
        <HintBox
          show={showHint}
          hints={value.data.hints}
          setShowHint={setShowHint}
        />
      </>
    )
  } else {
    return (
      <>
        <div className="AnswerBar">
          <div className="AnswerBar-Oneline-Bottom">
            <button
              className="AnswerBar-Hint-lap"
              onClick={(e) => {
                e.preventDefault()
                setShowHint(true)
              }}
            >
              <p>Hint</p>
              <img className="AnswerBar-Icon" src="images/idea.jpg" />
            </button>
            <input
              type="text"
              className="AnswerBar-Input"
              placeholder="Enter Answer"
              value={answer}
              onChange={(e) => {
                handleAnswer(e.target.value)
              }}
            ></input>

            <button
              className="AnswerBar-Submit-lap"
              type="button"
              onClick={Submit__}
            >
              submit
            </button>
          </div>
        </div>
        <HintBox
          show={showHint}
          hints={value.data.hints}
          setShowHint={setShowHint}
        />
      </>
    )
  }
}

AnswerBar.propTypes = {
  for: PropTypes.string,
}
