'use strict'

const cookbook = angular
	.module('cookbook', ['ngRoute'])
	.config($routeProvider =>
			$routeProvider
				.when('/', {
					controller: 'HomeCtrl',
					templateUrl: 'partials/home.html'
				})
				.when('/recipes', {
					controller: 'RecipeCtrl',
					templateUrl: 'partials/recipes.html'
				})
	)


