const asyncHandler = require('express-async-handler');

const Post = require('../Models/postModel');


// @desc Get posts
//@route GET /api/posts
//@access Private
const getPosts = asyncHandler(async (req,res) => {
    const posts = await Post.find({});


    res.status(200).json(posts);
});


// @desc create posts
//@route POST /api/posts
//@access Private
const createPosts = asyncHandler (async (req,res) => {
    if(!req.body.Title){
        res.status(400);
        throw new Error ("Add a text field");
    }

    const post = await Post.create({
        Title : req.body.Title,
        Content : req.body.Content
    })

    res.status(200).json(post);
});



// @desc update posts
//@route PUT /api/posts/:id
//@access Private
const updatePosts = asyncHandler (async (req,res) => {
    const post = await Post.findById(req.params.id);

    if(!post){
        res.status(400);
        throw new Error ("Post doesn't exist");
    }
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body.Content, {new : true});
    res.status(200).json(updatedPost);
});


// @desc delete posts
//@route delete /api/posts/:id
//@access Private
const deletePosts = asyncHandler (async (req,res) => {
    const post = await Post.findById(req.params.id);
    if(!post){
        res.status(400);
        throw new Error ("Post does not exist");
    }
    await post.remove();
    res.status(200).json({ id : req.params.id });
});


module.exports = {
    getPosts,
    createPosts,
    updatePosts,
    deletePosts
}