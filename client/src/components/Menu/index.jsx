import React, { useContext, useState } from 'react'
import styles from './index.module.css'
import { Link, useLocation } from 'react-router-dom'
import { Logout } from '../../api_calls/Auth'
import { Wrapper } from '../../RootPage'
import PropTypes from 'prop-types'

const navLinks = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Rules',
    link: '/rules',
  },
  {
    name: 'LeaderBoard',
    link: '/leaderboard',
  },
]

export default function Menu({ desktop }) {
  const value = useContext(Wrapper)
  const [isOpen, setOpen] = useState(false)
  const location = useLocation()

  // Mobile And Not Opened
  if (!desktop && !isOpen) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className={styles.MenuIcon}
        viewBox="0 0 16 16"
        onClick={() => setOpen(!isOpen)}
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    )
  } else
    return (
      <nav className={styles.NavBar}>
        <ul onClick={() => setOpen(!isOpen)}>
          {!desktop ? (
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </li>
          ) : (
            <></>
          )}

          {navLinks.map((e) => {
            if (e.link === location.pathname)
              return (
                <Link key={e.name} to={e.link}>
                  <li className={styles.active}>{e.name}</li>
                </Link>
              )
            else
              return (
                <Link key={e.name} to={e.link}>
                  <li>{e.name}</li>
                </Link>
              )
          })}

          {value.isLogin ? (
            <Link to="/">
              <li onClick={() => Logout(value.handleIsLogin)}>Logout</li>
            </Link>
          ) : (
            <></>
          )}
        </ul>
      </nav>
    )
}

Menu.propTypes = {
  desktop: PropTypes.bool,
  loggedIn: PropTypes.bool,
}
