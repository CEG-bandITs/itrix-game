const http = require("http")
const PORT = 3002 

const server = http.createServer(function(req,res){
    res.redirect(301,"https://cos.istaceg.in/register")
})

server.listen(PORT)

console.log("Server started at port ",PORT)

