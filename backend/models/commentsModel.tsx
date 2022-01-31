import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    name: String,
    email: String,
    text: String,
    date: Date,
})

export const Comments = mongoose.model('comments', CommentsSchema);