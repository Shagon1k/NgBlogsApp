import paginationController from './pagination.ctrl.js';

const paginationComponent = {
	templateUrl: './src/app/components/pagination/pagination.tpl.htm',
	controller: paginationController,
	bindings: {
		blogs: '=',
		page: '='
	}
}

export default paginationComponent