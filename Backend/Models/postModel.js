const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    Title : {
        type : String,
        required : [true, 'Please add a title']
    },
    Content : {
        type : String,
        required : true
    }
}, {
        timestamps : true
    }
);


const Post = mongoose.model('post', postSchema);



module.exports = Post;