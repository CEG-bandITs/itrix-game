/* eslint-disable spaced-comment */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))



async function createUser(data) {
  const res = await fetch('http://localhost:3001/api/users/new', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })
  const response = await res.json()
  return response
}

async function AuthUser(data) {
  const res = await fetch('http://localhost:3001/api/users/auth', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })
  const response = await res.json()
  return response
}

async function create100Users() {
  for (let i = 2000; i <2100; i++) {
    const data = {
      name: 'user' + i,
      clg: 'ceg',
      password: `user${i}@gmail.com`,
      email: `user${i}@gmail.com`,
      token:'fkjhdfkjshfjkds'
    }

    createUser(data).then((resp) => console.log(resp)).catch(err=>{
      console.log(err)})
  }
}

async function auth100Users() {
  for (let i = 0; i < 100; i++) {
    const data = {
      password: 'mnbv0987',
      email: `user${i}@gmail.com`,
    }

    AuthUser(data).then((resp) => console.log(resp))
  }
}

///////////////////

const secret = "6LeLM7cfAAAAAH1kRnyKvk8HZy9og5B4m-yvGkh7"
const res = "03AGdBq25RgeP2Xa1z2EZAPxNWzH0umTVnupI3uIAjOvJGUEgwfwoTfjnOr5C0b6q964KIn3LYLdoGDOFbIp7m26sISRYoIBuMEw4ryTWucFu5PYWQUuXwWhIa0B-e16yV7hH4oSsIf3kUh0WzTao2kzD2hIamBp8v5pWqqHHVbQ6UVzHsMricqXbhOEmpBgJXwc06J3ZHYwWehZKspRye9m5XYJwCVrZVVjkdM5DfWyfEriNqDjHKF6-8wYFBFy17BCVPbTwURm1yFg0KMEA4YGfMfs4U0YbeQlGlQ_DTKVYbsMJ4406K0lIkRp2kHDyIfyMXAkl3dZ-xOdV4T45Mx5iCToIp_wTt7SsjdoZJstj7pbDcBiWlEr-oD0N0ZaoNpIQ4B1f28OKXJ9cFhb_EnzvzSgWhCdqL4h3SD06f1Z9us-18ntTE_vVCDZmydfc7EbkKyIuP87_NrB6aBegQ-AX4cmU_-9XXRbH1M3mfqpsGhS2pI28IJH9eOOQcFcm75fN_rE4THTSR"

const test =async()=>{
  const resp = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${res}`,{
  method:'POST'

}).catch(res=>console.log(res))

const data = await  resp.json()

console.log(data)
}

///////

create100Users();