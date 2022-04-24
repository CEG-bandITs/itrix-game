import React from 'react'
import Menu from '../../components/Menu'
import { useWindowSize } from '../../lib/windowSize'
import styles from './Rules.module.css'
function Rules() {
  const size = useWindowSize()
  return (
    <main className={styles.main}>
      <Menu loggedIn={true} desktop={size.width > 1024} />
      <div className={styles.wrapper}></div>
      <div className={styles.bg}>
        <section className={styles.one}>
          <div className={styles.section}>Rules</div>
          <div className={styles.ruletext}>
            This is a treasure kind of a game in which the participant should
            try to find the answer by identifying the similarity and connecting
            the given images. <br></br>
            <br></br>
            The game will be live for three days.<br></br>
            <br></br>
            Each day is independent and one winner will be chosen each day.
            <br></br>
            <br></br>
            The UI of the website has no relation to the questions.
            <br></br>
            <br></br>
            Clues will be updated periodically in the specified time.
          </div>
        </section>
      </div>
    </main>
  )
}

export default Rules
