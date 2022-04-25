import axios from 'axios'
import jsCookie from 'js-cookie'

const API_URL = 'http://localhost:3001/api/users'

export const VerifyLogin = async () => {
  fetch('/api/users/verify')
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      return true
    })
    .catch(() => {
      return false
    })
  return true
}

export const Logout = (handler) => {
  jsCookie.remove('jwt')

  handler(false)
}

export const Login__ = async (data, handleUserData) => {
  let status = false
  let message = ''

  await axios
    .post(`${API_URL}/auth/`, data)
    .then((resp) => {
      const data = resp.data

      const serverMessage = data.message
      if (serverMessage === 'success') {
        document.cookie = 'jwt=' + data.token
        status = true
        handleUserData(data.data)
      } else message = serverMessage
    })
    .catch((err) => {
      message = 'Internet connection Problem'
      console.log(err)
    })

  return [status, message]
}

export const Register__ = async (data) => {
  let status = false
  let message = ''
  await axios
    .post(`${API_URL}/new/`, data)
    .then((resp) => {
      const data = resp.data
      const serverMessage = data.message

      if (serverMessage === 'success') {
        status = true
        document.cookie = 'jwt=' + data.token
      } else message = serverMessage
    })
    .catch((err) => {
      status = false
      message = 'Internet connection Problem'
      console.log(err)
    })

  return [status, message]
}
