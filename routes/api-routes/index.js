const router = require('express').Router();
const postRoutes = require('./posts');

// Message Board Posts routes
router.use('/', postRoutes);
router.use('/posts', postRoutes); //For the message board

module.exports = router;
