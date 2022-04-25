import React from 'react'
import styles from './Login.module.css'
import Menu from '../../components/Menu'
import { useWindowSize } from '../../lib/windowSize'
import { Email, Password } from '../../components/input'
import { validEmail, validPassword } from '../../lib/validation'
import { useNavigate } from 'react-router-dom'

function Login() {
  const size = useWindowSize()
  const nav = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validEmail() || !validPassword()) return

    fetch('/api/users/login')
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
                onClick={() => handleSubmit}
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
