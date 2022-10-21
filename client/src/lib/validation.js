const regexemail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const regexPhone = /[0-9]{10}/g

export function validEmail(email) {
  return email.toLowerCase().match(regexemail)
}

export function validPhoneNumber(ph) {
  if (regexPhone.test(ph)) return true
  else return false
}

export function validPassword(password) {
  if (password.length >= 8) return true
  else return false
}
