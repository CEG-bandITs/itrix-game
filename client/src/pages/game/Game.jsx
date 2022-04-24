import React, { useEffect, useState } from 'react'
import './Game.css'
import { SubmitAnswer, GetQuestion } from '../../api_calls/Game'
import { GiDiamondTrophy } from 'react-icons/gi'
import Menu from '../../components/menu/Menu'
import { AnswerBar, QuestionBar } from './GameComponents'
import ReactModal from 'react-modal'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import party from 'party-js'

export const Container = React.createContext()

//suucess array
const sucess = ['']
//failure array

function Game(props) {
  const [dimentions, SetDimentions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const [data, changeData] = useState(null)
  const [message, handleMessage] = useState('')
  const [modal, handleModal] = useState(false)
  const [MessageFromServer, handleMessageFromServer] = useState('')

  const value = {
    data: data,
    changeData: changeData,
    message: message,
    handleMessage: handleMessage,
    error: MessageFromServer,
    handleError: handleMessageFromServer,
  }

  useEffect(() => {
    //party.js
    document
      .querySelector('.party__button')
      .addEventListener('click', function (e) {
        party.confetti(this, { count: party.variation.range(100, 500) })
      })
    function HandleResize() {
      SetDimentions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    GetQuestion().then((res) => {
      if (res.message === 'success') {
        let data__ = {}
        data__['level'] = res.data.level
        data__['questions'] = res.data.question.images
        data__['hints'] = res.data.question.hints
        changeData(data__)
      } else {
        handleMessage(res.message)
      }
    })
    window.addEventListener('resize', HandleResize)
    return () => {
      window.removeEventListener('resize', HandleResize)
    }

    //get the game question

    /*
    data = {
      question_1 : ... ,
      
    }
    */
  }, [])

  useEffect(() => {
    console.log(MessageFromServer)
    if (MessageFromServer !== '' && MessageFromServer !== 'success') {
      if (MessageFromServer === 'game ended') {
        changeData(null)
        handleMessage('you have completed the game !!')
        document.getElementsByClassName('party__button')[0].click()
      } else {
        NotificationManager.error(MessageFromServer)
        handleMessageFromServer('')
      }
    } else if (MessageFromServer === 'success') {
      NotificationManager.success(MessageFromServer)
      handleMessageFromServer('')
    }
  }, [MessageFromServer])

  return (
    <Container.Provider value={value}>
      <button
        className="party__button"
        style={{
          display: 'none',
          position: 'absolute',
          top: '50%',
          left: '50%',
          translate: 'transform(-50%,-50%)',
        }}
      ></button>
      <div className="GamePage">
        <div className="game__nav">
          <span className="game__menu">{/* <Menu /> muthu's side bar*/}</span>

          <span className="trophy">
            {data !== null && (
              <div>
                {' '}
                {data['level']} <GiDiamondTrophy style={{ color: 'yellow' }} />{' '}
              </div>
            )}
          </span>
        </div>

        {data === null ? (
          <div className="message__div">
            {message === '' ? 'loading' : message}
          </div>
        ) : dimentions.width <= 1300 ? (
          <>
            <QuestionBar for="Mobile" />
            <AnswerBar for="Mobile" />
          </>
        ) : (
          <>
            <QuestionBar />
            <AnswerBar />
          </>
        )}

        <ReactModal className="success__modal" isOpen={modal}>
          <button
            onClick={() => {
              handleModal(false)
            }}
          >
            {' '}
            X
          </button>
          <p>Success!!</p>
        </ReactModal>
      </div>
      <NotificationContainer />
    </Container.Provider>
  )
}

export default Game
