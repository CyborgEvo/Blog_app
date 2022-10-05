const { Router } = require('express');

const router = Router();

const { registerUser, loginUser, getUser } = require('../Controllers/userController');

const { protect } = require('../Middleware/authMiddleware');

router.route('/register')
.post(registerUser)


router.route('/login')
.post(loginUser)


router.route('/users/me')
.get(protect, getUser)


module.exports = router;