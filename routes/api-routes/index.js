const router = require('express').Router();
const postRoutes = require('./posts');
const userRoutes = require('./users');

// Message Board Posts routes

//router.use('/users', userRoutes);
router.use('/', postRoutes);
router.use('/posts', postRoutes)
router.use('/posts/:id', postRoutes); //For the message board


module.exports = router;
