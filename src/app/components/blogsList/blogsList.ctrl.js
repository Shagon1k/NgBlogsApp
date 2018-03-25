import { BLOGS_PER_PAGE } from '../config.js';

function blogsController($scope, blogsFactory, $location) {
	var ctrl = this;

	ctrl.page = 0;
	ctrl.blogsPerPage = BLOGS_PER_PAGE;
		
	ctrl.removeBlog = function(id) {
		blogsFactory.removeBlog(id);
	}

	ctrl.activateEditBlog = function(id) {
		$location.url('/blog/edit/' + id);
	}
}
blogsController.$inject = ['$scope', 'blogsFactory', '$location'];

export default blogsController;