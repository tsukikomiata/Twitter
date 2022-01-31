import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TrendsSchema = new Schema({
    id: Number,
    avatar: String,
    displayName: String,
    verified: Boolean,
    username: String,
    timeLeft: String,
    text: String,
    image: String,
    countComments: Number,
    countLikes: Number,
    countRetweets: Number,
    isLiked: Boolean
})

export const Trends = mongoose.model('trends', TrendsSchema);