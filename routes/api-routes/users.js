const router = require('express').Router();
const usersController = require('../../controllers/userController');

// Matches with "/api/posts"
router.route('/login').post(usersController.login);
router.route('/signup').post(usersController.signup);
router.route('/validate').post(usersController.validate); 


module.exports = router;
