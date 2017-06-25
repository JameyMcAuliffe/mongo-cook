'use strict'

let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

//Connect to mongoose
mongoose.connect('mongodb://localhost/cookbook')
let db = mongoose.connection

app.get('/', function(req, res) {
	res.send('Cookbook')
})

app.listen(3000)
console.log('Connected to port 3000')
