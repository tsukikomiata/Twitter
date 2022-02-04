import express from 'express';
import { Posts } from "../models/postsModel.js";
import {Users} from "../models/usersModel";

const router = express.Router();

router.get('/', (req, res) => {
    Posts.find({}, (err?: any, post?: any) => {
        if (err) {
            res.status(500).json({"success": false})
        } else {
            res.status(200).json({"success": true, "post": post})
        }
    })
});

router.get('/:id', (req, res) => {
    Posts.findOne({id: req.params.id}, (err?: any, post?: any) => {
        if (err) {
            res.status(500).json({"success": false})
        } else {
            res.status(200).json({"success": true, "post": post})
        }
    })

})
router.post('/', async (req, res) => {
    const num = await Posts.find().count()
    const newPost = new Posts({
        user: req.body.user,
        timeLeft: req.body.timeLeft,
        text: req.body.text,
        image: req.body.image,
        countComments: req.body.countComments,
        countLikes: req.body.countLikes,
        countRetweets: req.body.countRetweets,
        id: num+1
    });
    newPost.save(async (err?: any) => {
        if (err) {
            res.status(500).json({"success": false, "error": err})
        } else {
            Users.findOneAndUpdate(req.body.user, {"$push": {"posts": newPost}})
            res.status(200).json({"success": true, "post": newPost})
        }
    })
})

export default router