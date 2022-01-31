import express from 'express';
import { Posts } from "../models/postsModel.js";

const router = express.Router();

router.get('/', (req, res) => {
    const {search} = req.body
    Posts.find({text: { $regex: req.query.search}}, (err?: any, post?: any) => {
        if (err) {
            res.status(400).json({"success": false, "message": "Posts not found"})
        } else {
            res.send(post)
        }
    })
})


export default router