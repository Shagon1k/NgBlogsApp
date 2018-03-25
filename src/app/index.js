import angular from 'angular';
import messages from 'angular-messages';
import route from 'angular-route';
import '../styles/main.scss';
import blogsListComponent from './components/blogsList/blogsList.js';
import addEditBlogComponent from './components/addEditBlog/addEditblog.js';
import addBlogBtnComponent from './components/addBlogBtn/addBlogBtn.js';
import addEditValidationDir from './directives/addEditValidation.js';
import blogsFactory from './factories/blogsFactory.js';

var app = angular.module('blogsApp', [route, messages]);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/blogs', {
		template: `
			<blogs-list></blogs-list>
			<add-blog-btn></add-blog-btn>
		`
	})
	.when('/blog/add', {
		template: '<add-edit-blog></add-edit-blog>'
	})
	.when('/blog/edit/:id', {
		template: '<add-edit-blog></add-edit-blog>'
	})
	.otherwise({redirectTo: '/blogs'})

	$locationProvider.html5Mode(true);
});

app.directive('addEditValidation', addEditValidationDir);

app.factory('blogsFactory', blogsFactory);

app.controller('blogsAppController', ['$scope', 'blogsFactory', function ($scope, blogsFactory) {
	$scope.isLoading = true;
	blogsFactory.getBlogs()
		.then(function() {
			$scope.isLoading = false;
		})
}]);


app.component('blogsList', blogsListComponent);
app.component('addBlogBtn', addBlogBtnComponent);
app.component('addEditBlog', addEditBlogComponent);