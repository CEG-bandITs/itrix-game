const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))

create100Users()

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
  for (let i = 0; i < 100; i++) {
    const data = {
      name: 'user' + i,
      clg: 'ceg',
      password: 'mnbv0987',
      email: `user${i}@gmail.com`,
    }

    createUser(data).then((resp) => console.log(resp))
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
