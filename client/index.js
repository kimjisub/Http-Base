const io = require('socket.io-client')('http://localhost:8080')


io.on('connect', () => {
	console.log('connect:', io.id)
})
io.on('disconnect', () => {
	console.log('disconnect')
})
io.on('work', data => {
	console.log('work')
})