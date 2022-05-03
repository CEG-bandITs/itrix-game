/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import styles from './Game.module.css'
import { GetQuestion } from '../../api_calls/Game'
import { GiDiamondTrophy } from 'react-icons/gi'
import Menu from '../../components/Menu'
import { AnswerBar, QuestionBar } from './GameComponents'
import { useWindowSize } from '../../lib/windowSize'
import { Modal } from '../../components/Notifications/Notifications'
import { CountDown } from '../../components/countdown'

export const Container = React.createContext()

function Game() {
  const size = useWindowSize()

  const [data, changeData] = useState(null)
  const [message, handleMessage] = useState('')
  const [successModal, handleSuccessModal] = useState(false)
  const [ErrorMessage, handleErrorMessage] = useState('')

  const value = {
    data,
    changeData,
    message,
    handleMessage,
    successModal,
    handleSuccessModal,
    ErrorMessage,
    handleErrorMessage,
  }

  useEffect(() => {
    ;(async () => {
      const res = await GetQuestion()
      if (res.message === 'Success') {
        if (res.data !== null) {
          const data = {}
          data.level = res.questionData.level
          data.images = res.questionData.images
          data.hints = res.questionData.hints

          changeData(data)
        } else handleMessage('Game completed!')
      } else {
        handleMessage(res.message)
      }
    })()
  }, [])

  if (message !== '' || data === null)
    return (
      <>
        <main className={styles.main}>
          <Menu loggedIn={true} desktop={size.width > 1024} />
          <div className={styles.wrapper}>
            <div className={styles.GamePage}>
              <div className={styles.message}>
                <h1>{message}</h1>
              </div>
            </div>
          </div>
        </main>
      </>
    )

  return (
    <main className={styles.main}>
      <Menu loggedIn={true} desktop={size.width > 1024} />
      <div className={styles.wrapper}>
        <Container.Provider value={value}>
          <div className={styles.GamePage}>
            <div className={styles.game__nav}>
              <CountDown finaldate={1651665600000} /> Time Left
              <span className={styles.game__menu}></span>
              <span className={styles.trophy}>
                {data !== null && (
                  <>
                    Lvl: {data.level}
                    <GiDiamondTrophy style={{ color: 'yellow' }} />{' '}
                  </>
                )}
              </span>
            </div>
            <span className={styles.error__}>
              {ErrorMessage !== '' && ErrorMessage}
            </span>
            {size.width <= 1300 ? (
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
          </div>
          {successModal && <Modal handler={handleSuccessModal} />}
        </Container.Provider>
      </div>
    </main>
  )
}

export default Game
