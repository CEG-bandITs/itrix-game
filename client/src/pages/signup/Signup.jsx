import React from 'react'
import { useNavigate } from 'react-router-dom'
import SignupStyle from './Signup.module.css'
import { ConfirmPassword, Email, Password } from '../../components/input'
import { NotificationContainer } from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import Menu from '../../components/Menu'
import { useWindowSize } from '../../lib/windowSize'

function Signup() {
  const size = useWindowSize()
  const navigate = useNavigate()
  const submitData = () => {}

  return (
    <main className={SignupStyle.main}>
      <Menu loggedIn={true} desktop={size.width > 1024} />
      <div className={SignupStyle.wrapper}>
        <div className={SignupStyle.container}>
          <h1>Signup</h1>

          <form action="">
            <input type="text" name="fname" id="fname" placeholder="Name" />

            <Email />

            <input
              type="text"
              name="clg"
              id="clg"
              placeholder="College (If you're student)"
            />

            <Password />
            <ConfirmPassword />

            <input type="button" value={'Sign Up'} onClick={submitData} />

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
