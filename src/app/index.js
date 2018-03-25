import angular from 'angular';
import messages from 'angular-messages';
import route from 'angular-route';
import '../styles/main.scss';
import blogsListComponent from './components/blogsList/blogsList.js';
import addEditBlogComponent from './components/addEditBlog/addEditblog.js';
import addBlogBtnComponent from './components/addBlogBtn/addBlogBtn.js';
import paginationComponent from './components/pagination/pagination.js';
import addEditValidationDir from './directives/addEditValidation.js';
import blogsFactory from './factories/blogsFactory.js';

var app = angular.module('blogsApp', [route, messages]);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/blogs', {
		template: `
			<blogs-list blogs="$ctrl.blogs"></blogs-list>
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

app.filter('range', function() {
	return function(val, range) {
		range = parseInt(range);
		for (var i = 0; i < range; i++)
			val.push(i);
		return val;
	};
});

app.directive('addEditValidation', addEditValidationDir);

app.factory('blogsFactory', blogsFactory);

app.controller('blogsAppController', ['$scope', 'blogsFactory', function ($scope, blogsFactory) {
	var ctrl = this;
	ctrl.isLoading = true;

	blogsFactory.getBlogs()
		.then(function(res) {
			ctrl.blogs = res;
			ctrl.isLoading = false;
		})
}]);


app.component('blogsList', blogsListComponent);
app.component('addBlogBtn', addBlogBtnComponent);
app.component('pagination', paginationComponent);
app.component('addEditBlog', addEditBlogComponent);