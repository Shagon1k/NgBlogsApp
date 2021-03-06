function addEditBlogController($scope, blogsFactory, $routeParams, $location) {
	var ctrl = this;

	ctrl.submitted = true;
	ctrl.changingBlogId = $routeParams.id || '';

	if (ctrl.changingBlogId) {
		blogsFactory.getBlogs()
		.then(function(res) {
			var blog = res.find(elem => elem._id === ctrl.changingBlogId);
			ctrl.newBlogTitle = blog.title;
			ctrl.newBlogAuthor = blog.author;
			ctrl.newBlogMessage = blog.message;
		})
	}

	ctrl.getNewBlog = function() {
		var newBlog = {
			title: ctrl.newBlogTitle,
			author: ctrl.newBlogAuthor,
			message: ctrl.newBlogMessage
		};

		ctrl.submitted = true;
		ctrl.newBlogTitle = '';
		ctrl.newBlogAuthor = '';
		ctrl.newBlogMessage = '';

		return newBlog;
	}
	
	ctrl.addBlog = function () {
		var newBlog = ctrl.getNewBlog();

		if (!newBlog.title || !newBlog.author || !newBlog.message) {
			ctrl.submitted = false;
			return;
		};

		blogsFactory.addBlog(newBlog);
		$location.url('/');
	};

	ctrl.editTodo = function() {
		var newBlog = ctrl.getNewBlog();

		if (!newBlog.title || !newBlog.author || !newBlog.message) {
			ctrl.submitted = false;
			return;
		};

		blogsFactory.changeBlog(ctrl.changingBlogId, newBlog);
		$location.url('/');
	}
	
}

addEditBlogController.$inject = ['$scope', 'blogsFactory', '$routeParams', '$location'];

export default addEditBlogController;