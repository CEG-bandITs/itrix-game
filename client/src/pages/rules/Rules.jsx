/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import Menu from '../../components/Menu'
import { useWindowSize } from '../../lib/windowSize'
import styles from './Rules.module.css'
function Rules() {
  const size = useWindowSize()
  return (
     <div className={styles.wrapper}>
       <div className={styles.menu}>

       <Menu loggedIn={true} desktop={size.width > 1024} />
       </div> 

       <div className={styles.text}>
         <div className ={styles.header}>Rules</div>
         <div className={styles.content}>
           <div>
              This is a treasure kind of a game in which the participant should
              try to find the answer by identifying the similarity and connecting the images.
          </div>
          <div>
              The game will be live for three days.
          </div>
          <div>
             Each day is independent and one winner will be chosen each day.
          </div>
          <div>
             The UI of the website has no relation to the questions.
          </div>
          <div>
             Clues will be updated periodically in the specified time.
          </div>
        </div>

        </div>
    </div>
  )
}

export default Rules
