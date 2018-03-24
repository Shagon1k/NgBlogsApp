import angular from 'angular';
import messages from 'angular-messages';
import route from 'angular-route';
import '../styles/main.scss';
import blogsListComponent from './components/blogsList/blogsList.js';
import addEditBlogComponent from './components/addEditBlog/addEditblog.js'
import addEditValidationDir from './directives/addEditValidation.js'

var app = angular.module('blogsApp', [route, messages]);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/blogs', {
		template: '<blogs-list></blogs-list>'
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

app.factory('blogsFactory', function(){
	var blogsList = [
			{
				'_id': "5a95a278a4360400e0dfb9e5",
				'title': "Title One",
				'author': "Author One",
				'date': "2018-02-27T18:24:56.575Z",
				'message': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eveniet ut facilis, ex quod modi, optio fugiat qui totam maiores et delectus numquam similique, ad quia esse. Eligendi accusantium, tenetur similique. Doloremque molestiae earum deleniti consequuntur officiis expedita cupiditate esse ea similique, exercitationem reprehenderit nesciunt ipsam illum in, maiores assumenda?"
			},
			{
				'_id': "5a95a280a4360400e0dfb9e6",
				'title': "Title Two",
				'author': "Author Two",
				'date': "2018-02-27T18:25:04.529Z",
				'message': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eveniet ut facilis, ex quod modi, optio fugiat qui totam maiores et delectus numquam similique, ad quia esse. Eligendi accusantium, tenetur similique. Doloremque molestiae earum deleniti consequuntur officiis expedita cupiditate esse ea similique, exercitationem reprehenderit nesciunt ipsam illum in, maiores assumenda?"
			},
			{
				'_id': "5a95a297a4360400e0dfb9ea",
				'title': "Title Six",
				'author': "Author Six",
				'date': "2018-02-27T18:25:27.645Z",
				'message': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eveniet ut facilis, ex quod modi, optio fugiat qui totam maiores et delectus numquam similique, ad quia esse. Eligendi accusantium, tenetur similique. Doloremque molestiae earum deleniti consequuntur officiis expedita cupiditate esse ea similique, exercitationem reprehenderit nesciunt ipsam illum in, maiores assumenda?"
			},
			{
				'_id': "5a95c1dc44870b1ec8c9ca6a",
				'title': "xzcxzccxzzxczxc",
				'author': "xzczxcxzc",
				'date': "2018-02-27T20:38:52.522Z",
				'message': "zxzcxzcx"
			},
			{
				'_id': "5a95c2b944870b1ec8c9ca6b",
				'title': "Ololo",
				'author': "Ololo",
				'date': "2018-02-27T20:42:33.620Z",
				'message': "Olollo"
			}
		];

	return {
		getBlogs: function getBlogs() {
			 return blogsList;
		},
		addBlog: function addBlog(newBlog) {
			blogsList.push(newBlog);
		},
		removeBlog: function removeBlog(id) {
			var index = blogsList.findIndex(elem => elem._id === id);

			blogsList.splice(index, 1);
		},
		changeBlog: function(blogId, newBlog) {
			var index = blogsList.findIndex(elem => elem._id === blogId);
			blogsList[index] = newBlog;
		}
	};
});

app.component('blogsList', blogsListComponent);
app.component('addEditBlog', addEditBlogComponent);