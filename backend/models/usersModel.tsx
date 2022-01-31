import mongoose from "mongoose";


const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: String,
    tag: {type: String, unique: true},
    hashedPassword: String,
    posts: [],
    likedPosts: [],
    following: [],
    followers: [],
    avatar: {type: String, default: "https://cdn1.ozone.ru/s3/multimedia-3/c1200/6079430331.jpg"},
    backgroundImage: {type: String, default: "https://cdn1.ozone.ru/s3/multimedia-3/c1200/6079430331.jpg"},
    verified: Boolean,
    regDate: {type: Date, default: Date.now}
})

export const Users = mongoose.model('users', UsersSchema);