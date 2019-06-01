const router = require('express').Router();
const postRoutes = require('./posts');
const userRoutes = require('./users');

// Message Board Posts routes
// router.use('/', postRoutes);
router.use('/users', userRoutes);
// router.use('/posts', postRoutes); //For the message board

module.exports = router;
