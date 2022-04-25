import React, { useState } from 'react'
import style from './Game.module.css'
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
      <div className={style.QuestionBar}>
        <img
          className={style.previcon}
          src="images/right.png"
          alt="right image"
          onClick={IncreaseImgPointer}
        />
        <img
          className={style.QuestionImg}
          src={data.images[ImgPointer].url}
        ></img>
        <img
          className={style.nexticon}
          src="images/right.png"
          alt="left image"
          onClick={DecreaseImgPointer}
        />
      </div>
    )
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
          className={style.GreyLayer}
          onClick={() => {
            props.setShowHint(false)
          }}
        ></div>
        <div className={style.HintBox}>
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

  function Submit(e) {
    e.preventDefault()

    if (answer.trim().length !== 0) {
      handleDisableButton(true)
      SubmitAnswer({ level: value.data.level, answer }).then((resp) => {
        handleDisableButton(false)
        console.log(resp)

        if (resp.message === 'Success') {
          const temp = resp.data
          if (resp.data == null) {
            value.handleError('End Of Game')
            return
          }
          const data = {
            level: temp.level,
            hints: temp.hints,
            questions: temp.questions,
          }
          value.changeData(data)
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
        <div className={style.AnswerBar}>
          <form>
            <input
              className={style.AnswerBarInput}
              type="text"
              value={answer}
              onChange={(e) => {
                handleAnswer(e.target.value)
              }}
              placeholder="Enter Answer"
            ></input>
            <div className={style.AnswerBarBottom}>
              <button
                className={style.AnswerBarHint}
                onClick={(e) => {
                  e.preventDefault()
                  setShowHint(true)
                }}
              >
                Hint
                <img className={style.AnswerBarIcon} src="images/idea.jpg" />
              </button>
              <button
                disabled={disableButton}
                type="button"
                className={style.AnswerBarSubmit}
                onClick={(e) => Submit(e)}
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
        <div className={style.AnswerBar}>
          <div className={style.AnswerBarOnelineBottom}>
            <button
              className={style.AnswerBarHintlap}
              onClick={(e) => {
                e.preventDefault()
                setShowHint(true)
              }}
            >
              <p>Hint</p>
              <img className={style.AnswerBarIcon} src="images/idea.jpg" />
            </button>
            <input
              type="text"
              className={style.AnswerBarInput}
              placeholder="Enter Answer"
              value={answer}
              onChange={(e) => {
                handleAnswer(e.target.value)
              }}
            ></input>

            <button
              className={style.AnswerBarSubmitlap}
              type="button"
              onClick={Submit}
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
