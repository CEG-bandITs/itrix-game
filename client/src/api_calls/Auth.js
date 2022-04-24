import axios from 'axios'

const API_URL = 'http://localhost:3001/api/users'

function getCookie(cName) {
  const name = cName + '='
  const cDecoded = decodeURIComponent(document.cookie)
  const cArr = cDecoded.split('; ')
  let res
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length)
  })
  return res
}

export const VerifyLogin = async () => {
  let response = false
  let data = {}
  const token = getCookie('jwt')
  await axios
    .get(`${API_URL}/details/`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    .then((res) => {
      console.log(res.data)
      if (res.data.message === 'success') {
        response = true
        data = res.data.data
      }
    })

  return [response, data]
}

export const Logout = (handler) => {
  document.cookie = 'jwt='

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
