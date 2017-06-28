'use strict'

let mongoose = require('mongoose')

//Recipes Schema
let recipeSchema = mongoose.Schema({
	name: String,
	ingredients: Array,
	directions: String
})

let Recipes = module.exports = mongoose.model('Recipes', recipeSchema)

module.exports.getRecipes = (cb) => {
	Recipes.find(cb)
}

module.exports.getRecipeById = (id, cb) => {
	Recipes.findById(id, cb)
}

//Add recipe
module.exports.addRecipe = (recipe, cb) => {
	Recipes.create(recipe, cb)
}
