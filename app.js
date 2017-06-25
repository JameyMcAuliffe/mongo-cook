'use strict'

let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

let Recipes = require('./models/recipes')

//Connect to mongoose
mongoose.connect('mongodb://localhost:27017/Cookbook')
let db = mongoose.connection

app.get('/', function(req, res) {
	res.send('Cookbook')
})

app.get('/recipes', function(req, res) {
	Recipes.getRecipes(function(err, recipes) {
		if(err){
			throw err
		}
		res.json(recipes)
	})
})

app.listen(3000)
console.log('Connected to port 3000')
