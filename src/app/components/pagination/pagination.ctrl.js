import { BLOGS_PER_PAGE } from '../config.js';

function paginationController($scope, blogsFactory) {
	var ctrl = this;

	blogsFactory.getBlogs()
		.then(function(res) {
			ctrl.pagesCount = Math.ceil(res.length / BLOGS_PER_PAGE);
			console.log(ctrl.pagesCount);
		})

	ctrl.setPage = function(pageNumb) {
		ctrl.page = pageNumb;
	}

	ctrl.activateEditBlog = function(id) {
		$location.url('/blog/edit/' + id);
	}
}
paginationController.$inject = ['$scope', 'blogsFactory'];

export default paginationController;