/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import styles from './Login.module.css'
import Menu from '../../components/Menu'
import { useWindowSize } from '../../lib/windowSize'
import { Email, Password } from '../../components/input'
import { validEmail, validPassword } from '../../lib/validation'
import { useNavigate } from 'react-router-dom'
import { Wrapper } from '../../RootPage'
import { LoginUser } from '../../api_calls/Auth'
import {
  NotifyError,
  NotifySuccess,
  NotifierContainer,
} from '../../components/Notifications/Notifications'

function Login() {
  const value = React.useContext(Wrapper)
  const size = useWindowSize()
  const nav = useNavigate()
  const [disableButton, handleDisableButton] = React.useState(false)
  const [hint, handleHint] = React.useState(false)
  const handleSubmit = (e) => {
    const data = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    }

    // showing error if all details are not filled
    if (data.email.trim().length === 0 || data.password.trim().length === 0) {
      handleHint(true)
      return
    }
    // Don't send request if its invalid
    if (!validEmail(data.email) || !validPassword(data.password)) {
      return
    }

    ;(async () => {
      handleDisableButton(true)
      const res = await fetch('/api/users/auth', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      })
      const response = await res.json()
      if (response.message === 'success') {
        NotifySuccess('Login Sucess!!')
        setTimeout(() => {
          LoginUser(response.token, value.handleIsLogin)
        }, 2000)
      } else {
        NotifyError(response.message)
        handleDisableButton(false)
        handleHint(false)
      }
    })()
  }

  return (
    <main className={styles.main}>
      <Menu loggedIn={true} desktop={size.width > 1024} />
      <div className={styles.wrapper}>
        <div className={styles.login}>
          <div className={styles.darkLayer}>
            <form className={styles.loginBox}>
              <h1>Sign In</h1>
              {hint && <p className={styles.hint}>Some fields are empty</p>}
              <Email />
              <Password />

              <input
                type="button"
                value={'Sign In'}
                onClick={(e) => handleSubmit(e)}
                className={styles.login__button}
              />

              <div className={styles.createAccount}>
                <p>Don't have an account?</p>
                <input
                  type="button"
                  value={'Sign Up'}
                  disabled={disableButton}
                  onClick={() => nav('/register')}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <NotifierContainer />
    </main>
  )
}

export default Login
