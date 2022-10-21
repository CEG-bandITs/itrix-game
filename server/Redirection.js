const http = require('http')
const PORT = 80

const server = http.createServer(function (req, res) {
  res.redirect(301, 'https://cos.istaceg.in/')
})

server.listen(PORT)

console.log('Redirection server started at port ', PORT)
