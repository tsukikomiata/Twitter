import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TrendsSchema = new Schema({
    type: {type: String, default: "Trending in Russia"},
    title: {type: String},
    count: Number
})

export const Trends = mongoose.model('trends', TrendsSchema);