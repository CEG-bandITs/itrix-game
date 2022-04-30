/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import style from './Leaderboard.module.css'
import Menu from '../../components/Menu'
import { useWindowSize } from '../../lib/windowSize'
import { Wrapper } from '../../RootPage'
import {AiOutlineArrowRight,AiOutlineArrowLeft} from "react-icons/ai" ;

function Leaderboard() {
  const size = useWindowSize()
  const [data, setData] = useState([])
  const [rank, setRank] = useState(-1)
  const value = React.useContext(Wrapper)
  const [currentRankPage, setCurrentRankPage] = useState(1)
  const [DisableRightButton,handleDisableRight] = useState(false)

  useEffect(() => {
    ;(async () => {
     
      const res = await fetch('http://localhost:3001/api/rank', { 
        cache: 'no-store' })
      const response = await res.json()
      console.log(response)
      setRank(response.rank)
      handleDisableRight(!response.end)
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      // So CurrentRankPage can't be negative
      if (currentRankPage < 1) setCurrentRankPage(1)
      const res = await fetch('http://localhost:3001/api/leaderboard', {
        method: 'POST',
        body: JSON.stringify({
          startRank: currentRankPage,
          endRank: currentRankPage + 10,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      })
      const response = await res.json()
      console.log(response)
      if (response.rankArray.length === 0) setCurrentRankPage(currentRankPage - 10)
      setData(response.rankArray)

    })()
  }, [currentRankPage])

  console.log('Current Page Rank: ', currentRankPage)

  return (
    <main className={style.main}>
      <Menu loggedIn={value.isLogin} desktop={size.width > 1024} />
      <div className={style.mainWrapper}>
        <div className={style.wrapper}>
          <div className={style.greyCover}>
            <h1>LeaderBoard</h1>
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
              </tbody>
            </table>
            <div className={style.navigator}>

              <button className={style.nav__button}  disabled={currentRankPage===1&&true} onClick={() => setCurrentRankPage(currentRankPage - 10)}>
                 <AiOutlineArrowLeft />
              </button>

              <button  className={style.nav__button} disabled={DisableRightButton} onClick={() => setCurrentRankPage(currentRankPage + 10)}>
                 <AiOutlineArrowRight/>
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Leaderboard
