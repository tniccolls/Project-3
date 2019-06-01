import axios from 'axios';

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get('/api/posts');
  },
  getPostsById: function() {
    return axios.get('/api/posts/:id');
  },
  createPost: function(data) {
    return axios.post('/api/posts', data);
  },

};
