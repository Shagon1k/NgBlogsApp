import blogsController from './blogsList.ctrl.js';

const blogsListComponent = {
	templateUrl: './src/app/components/blogsList/blogsList.tpl.htm',
	controller: blogsController,
	bindings: {
		blogs: '='
	}
}

export default blogsListComponent