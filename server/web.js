const express = require('express')

exports.run = (app) => {
	console.log('web ready')

	app.use(express.static('public'))

	
}