import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostsSchema = new Schema({
    id: Number,
    user: Object,
    timeLeft: String,
    text: String,
    image: String,
    countComments: Number,
    countLikes: Number,
    countRetweets: Number
})

export const Posts = mongoose.model('posts', PostsSchema);