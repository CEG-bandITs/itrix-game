import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Wrapper } from '../../RootPage'
import styles from './Home.module.css'
import { Logout } from '../../api_calls/Auth'
import Menu from '../../components/Menu'
import { useWindowSize } from '../../lib/windowSize'

function Home() {
  const value = React.useContext(Wrapper)
  return <div>{value.isLogin ? <AfterLogin /> : <BeforeLogin />}</div>
}

function AfterLogin() {
  const value = React.useContext(Wrapper)
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className="after__login">
          <div className={styles.logo}>
            <img src="images/logo.985d08990301b49117ac.webp" />
          </div>
          <div className="content1">
            <div className={styles.after__login}>
              <div className={styles.content1}>
                <div className={styles.hi} title="Chamber of secrets">
                  Chamber of secrets
                </div>

                <div className={styles.nav__links}>
                  <Link className={styles.btnGrad} to="/game">
                    Play Game
                  </Link>
                  <Link className={styles.other__pages} to="/leaderboard">
                    LeaderBoard
                  </Link>
                  <Link className={styles.other__pages} to="/rules">
                    Game Rules
                  </Link>
                  <span
                    className={styles.other__pages}
                    onClick={() => {
                      Logout(value.handleIsLogin)
                    }}
                  >
                    Logout
                  </span>
                </div>
              </div>

              <div className={styles.image__wrapper}></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function BeforeLogin() {
  const nav = useNavigate()
  const size = useWindowSize()
  return (
    <main className={styles.main}>
      <Menu loggedIn={true} desktop={size.width > 1024} />
      <div className={styles.wrapper}>
        <div className={styles.content__wrapper}>
          <div className={styles.logo}>
            <img src="images/logo.985d08990301b49117ac.webp" />
          </div>
          <div className={styles.content}>
            <p className={styles.content__header}> Chamber Of Secrets </p>
            <div className={styles.row}>
              <div className={styles.column}>
                <div
                  onClick={() => nav('/register')}
                  className={`${styles.img} ${styles.img1}`}
                ></div>
                <p> Sign Up</p>
              </div>
              <div className={styles.column}>
                <div
                  onClick={() => nav('/login')}
                  className={`${styles.img} ${styles.img2}`}
                ></div>
                <p> Login </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Home
