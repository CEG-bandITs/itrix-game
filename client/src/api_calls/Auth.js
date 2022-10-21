/* eslint-disable prettier/prettier */
import jsCookie from 'js-cookie'

export const VerifyLogin = async (handleCurrentDay) => {
  try {
    const res = await fetch('/api/users/verify', { cache: 'no-store' })
    const response = await res.json()
    handleCurrentDay(parseInt(response.currentDay))
    if (response.msg === 'Validated') {
      return true
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

export const LoginUser = (token, handler) => {
  jsCookie.set('jwt', token, { expires: 7, path: '' })

  handler(true)
}

export const Logout = (handler) => {
  jsCookie.remove('jwt')

  handler(false)
}
