const router = require('express').Router();
const postRoutes = require('./posts');

// Message Board Posts routes
router.use('/posts', postRoutes);

module.exports = router;
