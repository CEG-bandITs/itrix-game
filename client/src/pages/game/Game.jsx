import React, { useEffect, useState } from 'react'
import styles from './Game.module.css'
import { GetQuestion } from '../../api_calls/Game'
import { GiDiamondTrophy } from 'react-icons/gi'
import Menu from '../../components/Menu'
import { AnswerBar, QuestionBar } from './GameComponents'
import 'react-notifications/lib/notifications.css'
import { useWindowSize } from '../../lib/windowSize'

export const Container = React.createContext()

function Game() {
  const size = useWindowSize()

  const [data, changeData] = useState(null)
  const [message, handleMessage] = useState('')
  const [MessageFromServer, handleMessageFromServer] = useState('')

  const value = {
    data,
    changeData,
    message,
    handleMessage,
    error: MessageFromServer,
    handleError: handleMessageFromServer,
  }

  useEffect(() => {
    ;(async () => {
      const res = await GetQuestion()
      if (res.message === 'Success') {
        const data = {}
        data.level = res.questionData.level
        data.questions = res.questionData.images
        data.hints = res.questionData.hints
        changeData(data)
      } else {
        handleMessage(res.message)
      }
    })()
  }, [])

  return (
    <main className={styles.main}>
      <Menu loggedIn={true} desktop={size.width > 1024} />
      <div className={styles.wrapper}>
        <Container.Provider value={value}>
          <div className={styles.GamePage}>
            <div className={styles.game__nav}>
              <span className={styles.game__menu}></span>

              <span className={styles.trophy}>
                {data !== null && (
                  <div>
                    {data.level} <GiDiamondTrophy style={{ color: 'yellow' }} />{' '}
                  </div>
                )}
              </span>
            </div>

            {data === null ? (
              <div className={styles.message__div}>
                {message === '' ? 'loading' : message}
              </div>
            ) : size.width <= 1300 ? (
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
        </Container.Provider>
      </div>
    </main>
  )
}

export default Game
