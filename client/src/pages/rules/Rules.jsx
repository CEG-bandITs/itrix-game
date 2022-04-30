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
          <h1>Rules</h1>
          <ul>
            <li>
              This is a treasure kind of a game in which the participant should
              try to find the answer by identifying the similarity and
              connecting the images.
            </li>
          </ul>
          <hr />
          <ul>
            <li>The game will be live for three days. </li>
          </ul>
          <hr />
          <ul>
            <li>
              Each day is independent and one winner will be chosen each day.
            </li>
          </ul>
          <hr />
          <ul>
            <li>The UI of the website has no relation to the questions. </li>
          </ul>
          <hr />
          <ul>
            <li>Clues will be updated periodically in the specified time. </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Rules
