const { Router } = require('express');
const router = Router();

const { getPosts, createPosts, updatePosts, deletePosts } = require('../Controllers/postcontroller')

router.route('/posts')
.get(getPosts)

.post(createPosts);


router.route('/posts/:id')
.put(updatePosts)

.delete(deletePosts)

module.exports = router;