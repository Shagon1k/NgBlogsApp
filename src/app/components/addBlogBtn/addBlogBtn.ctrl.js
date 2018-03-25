function addBlogBtnController($location) {
	var ctrl = this;

	ctrl.initAddBlog = function() {
		$location.url('/blog/add');
	}

}
addBlogBtnController.$inject = ['$location'];

export default addBlogBtnController;