const asyncHandler = require('express-async-handler');


// @desc Get posts
//@route GET /api/posts
//@access Private
const getPosts = asyncHandler(async (req,res) => {
    res.json({ message: "Get posts" });
});


// @desc create posts
//@route POST /api/posts
//@access Private
const createPosts = asyncHandler (async (req,res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error ("Add a text field");
    }
    res.status(200).json({ message : "Create Post" });
});



// @desc update posts
//@route PUT /api/posts/:id
//@access Private
const updatePosts = asyncHandler (async (req,res) => {
    res.status(200).json({ message : `Update post ${req.params.id}`});
});


// @desc delete posts
//@route delete /api/posts/:id
//@access Private
const deletePosts = asyncHandler (async (req,res) => {
    res.status(200).json({ message : `Delete post ${req.params.id}`});
});


module.exports = {
    getPosts,
    createPosts,
    updatePosts,
    deletePosts
}