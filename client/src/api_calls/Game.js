/* eslint-disable prettier/prettier */
export const SubmitAnswer = async (data) => {
  const res = await fetch('/api/game/verify', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })
  const response = res.json()
  return response
}

export const GetQuestion = async () => {
  const res = await fetch('/api/game', { cache: 'no-store' })
  const response = await res.json()
  return response
}
