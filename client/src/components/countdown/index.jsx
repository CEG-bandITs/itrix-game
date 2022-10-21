import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export function CountDown({ finaldate }) {
  const [time, setTime] = useState('')

  useEffect(() => {
    setInterval(() => {
      const distance = finaldate - Date.now()
      if (distance < 0) {
        setTime('Game Over')
        return
      }
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      setTime(
        ' ' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ',
      )
    }, 1000)
  }, [])

  return <span>{time}</span>
}

CountDown.propTypes = {
  finaldate: PropTypes.number,
}
