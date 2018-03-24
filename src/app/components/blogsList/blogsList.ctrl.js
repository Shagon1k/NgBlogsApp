function blogsController($scope, blogsFactory, $location) {
	var ctrl = this;

	ctrl.blogs = blogsFactory.getBlogs();
	
	ctrl.removeBlog = function(id) {
		blogsFactory.removeBlog(id);
	}

	ctrl.activateEditBlog = function(id) {
		$location.url('/blog/edit/' + id);
	}
}
blogsController.$inject = ['$scope', 'blogsFactory', '$location'];

export default blogsController;