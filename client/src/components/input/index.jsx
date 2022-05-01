/* eslint-disable prettier/prettier */
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
      <span
        style={{
          display: hint ? '' : 'none',
          fontSize: 'medium',
          color: 'red',
        }}
      >
        {' '}
        Invalid Email{' '}
      </span>
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
      <span
        style={{
          display: hint ? '' : 'none',
          fontSize: 'medium',
          color: 'red',
        }}
      >
        Minimum 8 Characters{' '}
      </span>
      <input
        type="password"
        placeholder="Password"
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
    if (e.target.value === document.getElementById('password').value) {
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
      <span
        style={{
          display: hint ? '' : 'none',
          fontSize: 'medium',
          color: 'red',
        }}
      >
        Password mismatch{' '}
      </span>
      <input
        type="password"
        placeholder="Confirm password"
        name="password"
        id="confirmpassword"
        autoComplete="on"
        onChange={(e) => validatePassword(e)}
        required
      ></input>
    </>
  )
}
