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
    avatar: {type: String, default: "https://pbs.twimg.com/profile_images/1053797216698032130/AW12a1pq_400x400.jpg"},
    backgroundImage: {type: String, default: "https://pbs.twimg.com/profile_banners/987293652253720576/1540080303/1500x500"},
    verified: Boolean,
    regDate: {type: Date, default: Date.now}
})

export const Users = mongoose.model('users', UsersSchema);