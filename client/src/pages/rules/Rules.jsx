/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import Menu from '../../components/Menu'
import { useWindowSize } from '../../lib/windowSize'
import styles from './Rules.module.css'
function Rules() {
  const size = useWindowSize()
  return (
    <main className={styles.main}>
      <Menu loggedIn={true} desktop={size.width > 1024} />
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <div className={styles.header}>Rules</div>
          <div className={styles.content}>
            <ul>
              <li>
                This is a treasure kind of a game in which the participant
                should try to find the answer by identifying the similarity and
                connecting the images.
              </li>
            </ul>
            <ul>
              <li>The game will be live for three days. </li>
            </ul>
            <ul>
              <li>
                Each day is independent and one winner will be chosen each day.
              </li>
            </ul>
            <ul>
              <li>The UI of the website has no relation to the questions. </li>
            </ul>
            <ul>
              <li>
                Clues will be updated periodically in the specified time.{' '}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Rules
