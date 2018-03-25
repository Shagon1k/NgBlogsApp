import { BLOGS_PER_PAGE } from '../config.js';

function paginationController($scope, blogsFactory) {
	var ctrl = this;
	
	$scope.Math = window.Math;

	ctrl.blogsPerPage = BLOGS_PER_PAGE;

	ctrl.setPage = function(pageNumb) {
		ctrl.page = pageNumb;
	}
}
paginationController.$inject = ['$scope', 'blogsFactory'];

export default paginationController;