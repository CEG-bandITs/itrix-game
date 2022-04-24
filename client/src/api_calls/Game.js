import axios from 'axios'
const API_URL = 'http://localhost:3001/api/game'

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

export const SubmitAnswer = async (data) => {
  const token = getCookie('jwt')
  let resultData = {}
  await axios
    .post(`${API_URL}/verify/`, data, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    .then((resp) => {
      resultData = resp.data
    })

  return resultData
}

export const GetQuestion = async () => {
  /* 
  axios.get("/game" )
  with header -bearer token 
  response =>{
    question data , level , started time 
  }

  */
  const token = getCookie('jwt')
  let resultData = {}
  await axios
    .get(`${API_URL}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    .then((resp) => {
      resultData = resp.data
    })
  return resultData
}
