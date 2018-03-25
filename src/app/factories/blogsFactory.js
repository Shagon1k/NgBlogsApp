import { SERVER_URL } from '../config.js';
function blogsFactory($http, $q) {
	var blogsList = [];

	return {
		getBlogs: function getBlogs() {
			var def = $q.defer();
			if (blogsList.length) {
				def.resolve(blogsList);
				return def.promise;
			} else {
				return $http.get(SERVER_URL + '/blogs')
					.then(function(res) {
						blogsList = res.data.blogs;
						return res.data.blogs;
					})
			}
			
		},
		addBlog: function addBlog(newBlog) {
			return $http.put(SERVER_URL + '/blogs', newBlog)
				.then(function(res) {
					blogsList.push(res.data.blog);
					return blogsList;
				})
		},
		removeBlog: function removeBlog(id) {
			var index = blogsList.findIndex(elem => elem._id === id);

			return $http.delete(SERVER_URL + '/blogs/' + id)
				.then(function(res) {
					blogsList.splice(index, 1);
					return blogsList;
				})
		},
		changeBlog: function(blogId, newBlog) {
			var index = blogsList.findIndex(elem => elem._id === blogId);
			newBlog.id = blogId;

			return $http.post(SERVER_URL + '/blogs/update/', newBlog)
				.then(function(res) {
					blogsList[index] = res.data.blog;
					return blogsList;
				})			
		}
	};
}


blogsFactory.$inject = ['$http', '$q'];

export default blogsFactory;