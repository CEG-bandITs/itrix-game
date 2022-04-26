import React, { useEffect, useState } from 'react'
import style from './Leaderboard.module.css'
import Menu from '../../components/Menu'
import { useWindowSize } from '../../lib/windowSize'
import { Wrapper } from '../../RootPage'

const userRank = 6

function Leaderboard() {
  const size = useWindowSize()
  const [data, setData] = useState([])
  const value = React.useContext(Wrapper)
  const [currentRankPage, setCurrentRankPage] = useState(1)

  useEffect(() => {
    ;(async () => {
      // So CurrentRankPage can't be negative
      if (currentRankPage < 1) setCurrentRankPage(1)
      const res = await fetch('/api/leaderboard', {
        method: 'POST',
        body: JSON.stringify({
          startRank: currentRankPage,
          endRank: currentRankPage + 10,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const response = await res.json()
      setData(response)
    })()
  }, [currentRankPage])

  return (
    <main className={style.main}>
      <Menu loggedIn={value.isLogin} desktop={size.width > 1024} />
      <div className={style.mainWrapper}>
        <div className={style.wrapper}>
          <div className={style.greyCover}>
            <h1>LeaderBoard</h1>
            {value.isLogin ? (
              <div className={style.card}>
                <p>Your Rank</p>
                <h1>{userRank}</h1>
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
                {data.map((personDetails, index) => {
                  return (
                    <tr key={currentRankPage + index}>
                      <td>{currentRankPage + index}</td>
                      <td>{personDetails.name}</td>
                      <td>{personDetails.level}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div className={style.navigator}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                className="bi bi-arrow-left-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                className="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
                onClick={() => setCurrentRankPage(currentRankPage + 10)}
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Leaderboard
