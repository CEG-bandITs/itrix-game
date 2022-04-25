export const SubmitAnswer = async (data) => {
  const res = await fetch('/api/game/verify', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const response = res.json()
  return response
}

export const GetQuestion = async () => {
  const res = await fetch('/api/game')
  const response = await res.json()
  return response
}
