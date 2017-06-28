'use strict'

let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let Recipes = require('./models/recipes')
let path = require('path')

//Connect to mongoose
mongoose.connect('mongodb://localhost:27017/Cookbook')
let db = mongoose.connection

//Express Middlewares
app.use(express.static('client'))
app.use(bodyParser.json())
//app.set('view engine', 'html');

app.get('/', function(req, res) {
	res.sendFile('home.html', { root: path.join(__dirname, '../client/partials') } )
})

app.get('/recipes', function(req, res) {
	Recipes.getRecipes(function(err, recipes) {
		if(err){
			throw err
		}
		res.json(recipes)
	})
})

app.get('/recipes/:id', function(req, res) {
	Recipes.getRecipeById(req.params.id, function(err, recipe) {
		if(err){
			throw err
		}
		res.json(recipe)
	})
})

//Add new Recipe
app.post('/recipes', function(req, res) {

	let recipe = req.body
	Recipes.addRecipe(recipe, function(err, recipe) {
		if(err){
			throw err
		}
		res.json(recipe)
	})
})

app.listen(3000)
console.log('Connected to port 3000')
