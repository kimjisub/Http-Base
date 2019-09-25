const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io').listen(server);

const port = 8080

require('./web').run(app)
require('./socket').run(io)

server.listen(port, ()=>{
	console.log(`Server Started on ${port}`)
})