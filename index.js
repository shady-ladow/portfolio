'use strict'

const express = require('express')
    , http = require('http')
    , app = express()
    , server = http.createServer(app)
    , port = 80

app.set('views', './views').set('view engine', 'pug')
    .use(express.static('./public'))
    .get(
		['/', '/about', '/graduation', '/portfolio']
		, (req, res) => {
			res.render('layout')
		}
	)
server.listen(port, () => {
    console.log(`Server listening on port : ${port}`)
})

module.exports = app
