/* eslint-disable react/jsx-key */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import style from './Leaderboard.module.css'
import Menu from '../../components/Menu'
import { useWindowSize } from '../../lib/windowSize'
import { Wrapper } from '../../RootPage'
import { AiFillCaretRight, AiOutlineCaretLeft } from 'react-icons/ai'
import config from '../../config/config'

function Leaderboard() {
  const size = useWindowSize()
  const [data, setData] = useState([])
  const [rank, setRank] = useState(-1)
  const value = React.useContext(Wrapper)
  const [currentRankPage, setCurrentRankPage] = useState(1)
  const [DisableRightButton, handleDisableRight] = useState(true)
  const [DisableLeftButton, handleDisableLeft] = useState(true)
  const [currentDay, handleCurrentDay] = useState(value.currentDay)

  useEffect(() => {
    ;(async () => {
      const res = await fetch(
        '/api/rank?' +
          new URLSearchParams({
            currentDay,
          }),
        {
          cache: 'no-store',
        },
      )
      const response = await res.json()
      setRank(response.rank)
    })()
  }, [currentDay])

  useEffect(() => {
    ;(async () => {
      const res = await fetch('/api/leaderboard', {
        method: 'POST',
        body: JSON.stringify({
          startRank: currentRankPage,
          endRank: currentRankPage + 10,
          currentDay,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      })
      const response = await res.json()

      setData(response.rankArray)
      handleDisableRight(response.end)
    })()
  }, [currentDay])

  const fetch__ = async (id) => {
    let startRank = -1
    let endRank = -1
    if (id === 'left') {
      if (currentRankPage >= 1) {
        handleDisableLeft(true)
        startRank = currentRankPage - 10
        endRank = currentRankPage
      }
    } else {
      handleDisableRight(true)
      startRank = currentRankPage + 10
      endRank = currentRankPage + 20
    }

    if (startRank !== -1 && endRank !== -1) {
      const res = await fetch('/api/leaderboard', {
        method: 'POST',
        body: JSON.stringify({
          startRank,
          endRank,
          currentDay,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      })
      const response = await res.json()

      setData(response.rankArray)
      handleDisableRight(response.end)

      if (id === 'left') {
        if (currentRankPage !== 11) handleDisableLeft(false)
        setCurrentRankPage((pre) => pre - 10)
      } else {
        if (currentRankPage === 1) handleDisableLeft(false)
        setCurrentRankPage((pre) => pre + 10)
      }
    }
  }

  const handleChange = (e) => {
    handleCurrentDay(parseInt(e.target.value))
  }

  return (
    <main className={style.main}>
      <Menu loggedIn={value.isLogin} desktop={size.width > 1024} />
      <div className={style.mainWrapper}>
        <div className={style.wrapper}>
          <div className={style.greyCover}>
            <h1>LeaderBoard</h1>

            <div className={style.select__wrapper}>
              <select onChange={handleChange}>
                {config.dates.map((d) => {
                  return (
                    <option selected={config.currentDate} value={d}>
                      Day {d + 1}
                    </option>
                  )
                })}
              </select>
            </div>

            {value.isLogin && rank !== -1 ? (
              <div className={style.card}>
                <p>Your Rank</p>
                <h1>{rank + 1}</h1>
              </div>
            ) : (
              <></>
            )}
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Level</th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan={3}>
                      <p>No Users Avaliable</p>
                    </td>
                  </tr>
                ) : (
                  data.map((personDetails, index) => {
                    if (currentRankPage + index === rank + 1)
                      return (
                        <tr
                          key={currentRankPage + index}
                          className={style.whiteLine}
                        >
                          <td>{currentRankPage + index}</td>
                          <td>{personDetails.name}</td>
                          <td>{personDetails.level}</td>
                        </tr>
                      )
                    else
                      return (
                        <tr key={currentRankPage + index}>
                          <td>{currentRankPage + index}</td>
                          <td>{personDetails.name}</td>
                          <td>{personDetails.level}</td>
                        </tr>
                      )
                  })
                )}
                {data.length > 0 &&
                  data.length < 10 &&
                  Array.apply(null, { length: 10 - data.length }).map(
                    (val, index) => {
                      return (
                        <tr style={{ opacity: '0' }}>
                          <td>00</td>
                          <td>00</td>
                          <td>00</td>
                        </tr>
                      )
                    },
                  )}
              </tbody>
            </table>
            <div className={style.navigator}>
              <button
                className={style.nav__button}
                disabled={DisableLeftButton}
                id="left"
                onClick={() => fetch__('left')}
              >
                <AiOutlineCaretLeft />
              </button>

              <button
                className={style.nav__button}
                id="right"
                disabled={DisableRightButton}
                onClick={() => fetch__('right')}
              >
                <AiFillCaretRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Leaderboard
