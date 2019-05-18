const router = require('express').Router();
const postsController = require('../../controllers/postsController');

// Matches with "/api/posts"
router
  .route('/')
  .get(postsController.findAll)
  .post(postsController.create)
  .update(postController.update);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(postsController.findById)
//   .put(postsController.update)
//   .delete(postsController.remove);

module.exports = router;
