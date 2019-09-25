exports.run = (io) => {
	console.log('socket ready')
	io.on('connection', client => {
		console.log('connection:', client.id)

		client.on('disconnect', () => {
			console.log('disconnect:', client.id)
		})

		client.on('start', data => {
			console.log('start:', client.id)
		})

		client.on('done', async data => {
			console.log('done:', client.id)
		})
	})
}