import React from 'react'
import { Login__ } from '../../api_calls/Auth'
import { Wrapper } from '../../RootPage'
import styles from './Login.module.css'
import Menu from '../../components/Menu'
import { useWindowSize } from '../../lib/windowSize'

function Login() {
  const size = useWindowSize()
  const value = React.useContext(Wrapper)
  const [Error, handleError] = React.useState('')
  const [password, handlePassword] = React.useState('')
  const [email, handleEmail] = React.useState('')
  const [disableButton, handleDisableButton] = React.useState(false)

  const [emailError, handleEmailError] = React.useState('initial')
  const [passwordError, handlePasswordError] = React.useState('initial')

  const [initial, handleInitial] = React.useState(true)

  const handleSubmit = () => {
    if (passwordError === '' && emailError === '') {
      const data = { email: email, password: password }
      Login__(data, value.handleUserData).then((response) => {
        if (response[0] === true) {
          value.handleIsLogin(true)
        } else {
          handleDisableButton(false)
          handleError(response[1])
        }
      })
      handleDisableButton(true)
    }
    if (emailError === 'initial') {
      handleEmailError('empty email')

      document.getElementById('email').style.border = '1px solid red'
    }
    if (passwordError === 'initial') {
      handlePasswordError('empty password')
      document.getElementById('password').style.border = '1px solid red'
    }
  }

  React.useEffect(() => {
    if (initial !== true) {
      if (!email.endsWith('@gmail.com')) {
        document.getElementById('email').style.border = '1px solid red'
        handleEmailError('invalid email')
      } else if (email.endsWith('@gmail.com') && email.length >= 15) {
        document.getElementById('email').style.border = '2px solid green'
        handleEmailError('')
      } else {
        document.getElementById('email').style.border = 'none'
        handleEmailError('')
      }
    } else handleInitial(false)
  }, [email])

  React.useEffect(() => {
    if (initial !== true) {
      if (password.length < 1) {
        document.getElementById('password').style.border = '1px solid red'
        handlePasswordError('Empty password')
      } else if (password.length >= 1) {
        handlePasswordError('')
        document.getElementById('password').style.border = '2px solid green'
      } else {
        document.getElementById('password').style.border = 'none'
        handlePasswordError('')
      }
    } else handleInitial(false)
  }, [password])

  return (
    <main className={styles.main}>
      <Menu loggedIn={true} desktop={size.width > 1024} />
      <div className={styles.wrapper}></div>
      <div className={styles.login}>
        <div className={styles.darkLayer}>
          <form action="" className={styles.loginBox}>
            <h1>Sign In</h1>
            <span className={styles.Error}>{Error}</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                handleEmail(e.target.value)
              }}
              id="email"
            />
            <span className={styles.Error}>
              {' '}
              {emailError !== 'initial' && emailError}
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              id="password"
              onChange={(e) => {
                handlePassword(e.target.value)
              }}
            />
            <span className={styles.Error}>
              {passwordError !== 'initial' && passwordError}
            </span>

            <input
              type="button"
              value={disableButton ? 'please wait..' : 'Sign In'}
              onClick={handleSubmit}
              disabled={disableButton}
              style={{ opacity: disableButton && 0.5 }}
            />

            <div className={styles.createAccount}>
              <p>Don’t have an account?</p>
              <input type="button" value={'Sign Up'} />
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Login
