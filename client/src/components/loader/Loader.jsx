import React from 'react'
import styles from './Loader.module.css'

export default function Loader() {
  return (
    <div className={styles.centre}>
      <div className={styles.loader}></div>
    </div>
  )
}
