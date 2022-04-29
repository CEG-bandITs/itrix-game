/* eslint-disable no-empty */
/* eslint-disable prettier/prettier */
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left-circle-fill"
          onClick={() => IncreaseImgPointer()}
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg>
        <img
          className={style.QuestionImg}
          src={data.images[ImgPointer].url}
        ></img>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right-circle-fill"
          viewBox="0 0 16 16"
          onClick={() => DecreaseImgPointer()}
        >
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg>
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
        >
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

  const FormatAnswer = (message) => {
    message = message.trim()
    message = message.split(' ').join('')
    message = message.toLowerCase()
    return message
  }

  function Submit(e) {
    e.preventDefault()

    if (answer.trim().length !== 0) {
      handleDisableButton(true)
      const formattedAnswer = FormatAnswer(answer)
      SubmitAnswer({ level: value.data.level, answer: formattedAnswer }).then(
        (resp) => {
          handleDisableButton(false)

          if (resp.message === 'Success') {
            const temp = resp.data
            if (resp.data == null) {
              value.handleMessage('Game Over!')
              return
            }
            const data = {
              level: temp.level,
              hints: temp.hints,
              questions: temp.questions,
            }
            value.changeData(data)
            handleAnswer('')
            value.handleSuccessModal(true)
            value.handleErrorMessage('')
          } else {
            value.handleErrorMessage('Wrong answer')
            setTimeout(() => {
              value.handleErrorMessage('')
            }, 2500)
          }
        },
      )
    } else {
      value.handleErrorMessage('Answer is Empty')
      setTimeout(() => {
        value.handleErrorMessage('')
      }, 2500)
    }

    handleAnswer('')
  }
  return (
    <>
      <div className={style.AnswerBar}>
        <form action="">
          <button
            onClick={(e) => {
              e.preventDefault()
              setShowHint(true)
            }}
          >
            Hint
            <img src="/images/idea_icon.svg" />
          </button>
          <input
            type="text"
            name="answer"
            placeholder="Enter Answer"
            value={answer}
            onChange={(e) => {
              handleAnswer(e.target.value)
            }}
          />
          <input
            type="submit"
            disabled={disableButton}
            value="Submit"
            onClick={(e) => Submit(e)}
          />
        </form>
      </div>
      <HintBox
        show={showHint}
        hints={value.data.hints}
        setShowHint={setShowHint}
      />
    </>
  )
}

AnswerBar.propTypes = {
  for: PropTypes.string,
}
