const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
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