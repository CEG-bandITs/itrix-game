/* eslint-disable react/jsx-key */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import style from './Leaderboard.module.css'
import Menu from '../../components/Menu'
import { useWindowSize } from '../../lib/windowSize'
import { Wrapper } from '../../RootPage'
import {AiFillCaretRight,AiOutlineCaretLeft} from "react-icons/ai" ;
import { validPassword } from '../../lib/validation'

function Leaderboard() {
  const size = useWindowSize()
  const [data, setData] = useState([])
  const [rank, setRank] = useState(-1)
  const value = React.useContext(Wrapper)
  const [currentRankPage, setCurrentRankPage] = useState(1)
  const [DisableRightButton,handleDisableRight] = useState(true)
  const [DisableLeftButton,handleDisableLeft] =useState(true)
  useEffect(() => {
    ;(async () => {
     
      const res = await fetch('/api/rank', { 
        cache: 'no-store' })
      const response = await res.json()
      console.log(response)
      setRank(response.rank)
      
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
     
      const res = await fetch('/api/leaderboard', {
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

      setData(response.rankArray)
      handleDisableRight(response.end)
    })()
  }, [])


  const fetch__ =async(id)=>{
    
    let startRank=-1 ; let endRank=-1 ;
    if(id==="left")
    {
    
         if(currentRankPage>=1)
         {
            handleDisableLeft(true)
            startRank = currentRankPage-10 ;
            endRank =currentRankPage;
         } 
    }
    else 
    {
      handleDisableRight(true)
      startRank=currentRankPage+10;
      endRank= currentRankPage+20 ;
    }

    console.log(startRank,endRank)
    if((startRank!==-1)&&(endRank!==-1))
    {
      
      const res = await fetch('/api/leaderboard', {
        method: 'POST',
        body: JSON.stringify({
          startRank,
          endRank 
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      })
      const response = await res.json()
      console.log(response)

      setData(response.rankArray)
      handleDisableRight(response.end)

      if(id==="left") 
      {
          if(currentRankPage!==11) handleDisableLeft(false);
          setCurrentRankPage(pre=>pre-10);
     
        
      }
      else
      {
        if(currentRankPage===1) handleDisableLeft(false) 
        setCurrentRankPage(pre=>pre+10);
      }

    }
    
    
  }

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
                {(data.length>0&&data.length<10)&&(
                  Array.apply(null,{length: 10-data.length}).map((val,index)=>{
                    return(
                      <tr style={{opacity:"0"}}>
                        <td>00</td>
                        <td>00</td>
                        <td>00</td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
            <div className={style.navigator}>

              <button className={style.nav__button}  disabled={DisableLeftButton} id="left" onClick={() => fetch__("left")}>
                 <AiOutlineCaretLeft/>
              </button>

              <button  className={style.nav__button} id="right" disabled={DisableRightButton} onClick={() => fetch__("right")}>
                 <AiFillCaretRight/>
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Leaderboard
