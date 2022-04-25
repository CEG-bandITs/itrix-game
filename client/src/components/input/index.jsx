import React, { useState } from 'react'
import { validEmail, validPassword } from '../../lib/validation'

export function Email() {
  const [hint, setHint] = useState(false)
  const validateEmail = (e) => {
    if (validEmail(e.target.value)) {
      e.target.style.border = '0.1rem solid green'
      setHint(false)
    } else {
      e.target.style.border = '0.1rem solid red'
      setHint(true)
    }
    if (e.target.value === '') {
      setHint(false)
      e.target.style.border = ''
    }
  }

  return (
    <>
      <span style={{ display: hint ? '' : 'none' }}> Invalid Email </span>
      <input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        autoComplete="on"
        onChange={(e) => validateEmail(e)}
        required
      ></input>
    </>
  )
}

export function Password(props) {
  const [hint, setHint] = useState(false)
  const validatePassword = (e) => {
    if (validPassword(e.target.value)) {
      e.target.style.border = '0.1rem solid green'
      setHint(false)
    } else {
      e.target.style.border = '0.1rem solid red'
      setHint(true)
    }
    if (e.target.value === '') {
      setHint(false)
      e.target.style.border = ''
    }
  }

  return (
    <>
      <span style={{ display: hint ? '' : 'none' }}>Minimum 8 Characters </span>
      <input
        type="password"
        placeholder="password"
        name="password"
        id="password"
        autoComplete="on"
        onChange={(e) => validatePassword(e)}
        required
      ></input>
    </>
  )
}

export function ConfirmPassword(props) {
  const [hint, setHint] = useState(false)
  const validatePassword = (e) => {
    if (e.target.value === document.getElementById('password')) {
      e.target.style.border = '0.1rem solid green'
      setHint(false)
    } else {
      e.target.style.border = '0.1rem solid red'
      setHint(true)
    }
    if (e.target.value === '') {
      setHint(false)
      e.target.style.border = ''
    }
  }

  return (
    <>
      <span style={{ display: hint ? '' : 'none' }}>Minimum 8 Characters </span>
      <input
        type="password"
        placeholder="confirm password"
        name="password"
        id="confirmpassword"
        autoComplete="on"
        onChange={(e) => validatePassword(e)}
        required
      ></input>
    </>
  )
}
