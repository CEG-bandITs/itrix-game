/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SignupStyle from './Signup.module.css'
import { ConfirmPassword, Email, Password } from '../../components/input'
import Menu from '../../components/Menu'
import { useWindowSize } from '../../lib/windowSize'
import { validEmail, validPassword } from '../../lib/validation'
import { LoginUser } from '../../api_calls/Auth'
import { Wrapper } from '../../RootPage'
import config from '../../config/config'
import {
  NotifyError,
  NotifySuccess,
  NotifierContainer,
} from '../../components/Notifications/Notifications'

import Recaptcha from 'react-google-invisible-recaptcha'

function Signup() {
  const value = React.useContext(Wrapper)
  const size = useWindowSize()
  const navigate = useNavigate()
  const [disableButton, handleDisableButton] = React.useState(false)
  const [hint, handleHint] = React.useState(false)

  const recaptcha = React.createRef()
  const [token, setToken] = React.useState('')

  const submitData = (e) => {
    if (recaptcha.current.execute === undefined) {
      NotifyError('Poor Internet Connection ')
    } else recaptcha.current.execute()
  }

  React.useEffect(() => {
    if (token !== '') {
      const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        clg: document.getElementById('clg').value,
        tel: document.getElementById('tel').value,
        password: document.getElementById('password').value,
        token,
      }
      const c = document.getElementById('confirmpassword').value

      // checking empty fields
      if (
        data.name.trim().length === 0 ||
        data.email.trim().length === 0 ||
        data.clg.trim().length === 0 ||
        data.password.trim().length === 0 ||
        data.tel.trim().length === 0 ||
        c.trim().length === 0
      ) {
        handleHint(true)
        return
      }

      // Don't send request if its invalid
      if (!validEmail(data.email) || !validPassword(data.password)) {
        return
      }

      ;(async () => {
        handleDisableButton(true)
        const res = await fetch('/api/users/new', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
          cache: 'no-store',
        })
        const response = await res.json()
        if (response.message === 'success') {
          NotifySuccess('Account created successfully!!')
          setTimeout(() => {
            LoginUser(response.token, value.handleIsLogin)
          }, 2000)
        } else {
          NotifyError(response.message)
          handleDisableButton(true)
          handleHint(false)
        }
      })()
    }
  }, [token])

  return (
    <main className={SignupStyle.main}>
      <Menu loggedIn={true} desktop={size.width > 1024} />

      <div className={SignupStyle.wrapper}>
        <div className={SignupStyle.container}>
          <span className={SignupStyle.header}>Signup</span>
          {hint && <p className={SignupStyle.hint}>Some fields are empty</p>}

          <form action="">
            <input type="text" name="name" id="name" placeholder="Name" />

            <Email />

            <input
              type="text"
              name="clg"
              id="clg"
              placeholder="College"
              required
            />

            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Phone Number"
              required
            />

            <Password />
            <ConfirmPassword />

            <Recaptcha
              ref={recaptcha}
              sitekey={config.sitekey}
              onResolved={(e) => {
                setToken(e)
              }}
              size="small"
            />

            <input
              type="button"
              value={'Sign Up'}
              onClick={(e) => submitData(e)}
            />

            <div className={SignupStyle.aldreadyHavingAccount}>
              <p>Already have an account?</p>
              <input
                type="button"
                value="SignIn"
                onClick={() => navigate('/login')}
              />
            </div>
          </form>
        </div>
      </div>

      <NotifierContainer />
    </main>
  )
}

export default Signup
