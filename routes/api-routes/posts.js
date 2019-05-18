const router = require('express').Router();
const postsController = require('../../controllers/postsController');

// Matches with "/api/posts"
router
  .route('/posts')
  .get(postsController.findAll)
  .post(postsController.create);


module.exports = router;
