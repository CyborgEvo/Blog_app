const { Router } = require('express');
const router = Router();

const { getPosts, createPosts, updatePosts, deletePosts } = require('../Controllers/postcontroller');

const { protect } = require('../Middleware/authMiddleware');

router.route('/posts')
.get(getPosts)

.post(protect, createPosts);


router.route('/posts/:id')
.put(protect, updatePosts)

.delete(protect, deletePosts)

module.exports = router;