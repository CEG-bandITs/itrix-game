import React from 'react'
import styles from './Login.module.css'
import Menu from '../../components/Menu'
import { useWindowSize } from '../../lib/windowSize'
import { Email, Password } from '../../components/input'
import { validEmail, validPassword } from '../../lib/validation'
import { useNavigate } from 'react-router-dom'
import { Wrapper } from '../../RootPage'
import { LoginUser } from '../../api_calls/Auth'

function Login() {
  const value = React.useContext(Wrapper)
  const size = useWindowSize()
  const nav = useNavigate()

  const handleSubmit = (e) => {
    const data = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    }

    // Don't send request if its invalid
    if (!validEmail(data.email) || !validPassword(data.password)) {
      return
    }

    ;(async () => {
      const res = await fetch('/api/users/auth', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const response = await res.json()
      if (response.message === 'success') {
        LoginUser(response.token, value.handleIsLogin)
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
              <Email />
              <Password />

              <input
                type="button"
                value={'Sign In'}
                onClick={(e) => handleSubmit(e)}
              />

              <div className={styles.createAccount}>
                <p>Dont have an account?</p>
                <input
                  type="button"
                  value={'Sign Up'}
                  onClick={() => nav('/register')}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
