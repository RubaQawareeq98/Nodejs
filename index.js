
// const os = require('os')

// const user = os.userInfo()
// console.log(os.uptime())

const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/')
    res.end("hello world!")
    if(req.url === '/about')
    res.end("REad more about us")
    else
    res.end(` <h1> PageNotFound </h1>
    <a href = "/"> Back to home page </a>
    
    `)
})

server.listen(5000)