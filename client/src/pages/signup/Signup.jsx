import React from 'react'
import { useNavigate } from 'react-router-dom'
import SignupStyle from './Signup.module.css'
import { ConfirmPassword, Email, Password } from '../../components/input'
import { NotificationContainer } from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import Menu from '../../components/Menu'
import { useWindowSize } from '../../lib/windowSize'
import { validEmail, validPassword } from '../../lib/validation'
import { LoginUser } from '../../api_calls/Auth'
import { Wrapper } from '../../RootPage'

function Signup() {
  const value = React.useContext(Wrapper)
  const size = useWindowSize()
  const navigate = useNavigate()
  const submitData = (e) => {
    e.preventDefault()
    const data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      clg: document.getElementById('clg').value,
      password: document.getElementById('password').value,
    }

    // Don't send request if its invalid
    if (!validEmail(data.email) || !validPassword(data.password)) {
      return
    }

    ;(async () => {
      const res = await fetch('/api/users/new', {
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
    <main className={SignupStyle.main}>
      <Menu loggedIn={true} desktop={size.width > 1024} />
      <div className={SignupStyle.wrapper}>
        <div className={SignupStyle.container}>
          <h1>Signup</h1>

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

            <Password />
            <ConfirmPassword />

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
      <NotificationContainer />
    </main>
  )
}

export default Signup
