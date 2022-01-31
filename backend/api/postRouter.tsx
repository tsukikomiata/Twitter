import express from 'express';
import { Posts } from "../models/postsModel.js";
import {Users} from "../models/usersModel";

const router = express.Router();

router.get('/', (req, res) => {
    Posts.find({}, (err?: any, post?: any) => {
        if (err) {
            res.send('Posts not found')
        } else {
            res.send(post)
        }
    })
});

router.get('/:id', (req, res) => {
    Posts.findOne({id: req.params.id}, (err?: any, post?: any) => {
        if (err) {
            res.send('Post not found')
        } else {
            res.send(post)
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
        isLiked: req.body.isLiked,
        id: num+1
    })
    newPost.save(async (err?: any) => {
        if (err) {
            res.send(err)
        } else {
            await Users.findOneAndUpdate(req.body.user, {"$push": {"posts": newPost}})
            res.send(newPost)
        }
    })
})

router.post('/like/:id', async (req, res) => {
    const postId = req.params.id;
    const postToLike = Posts.findOne({'id': postId});
    const user = req.body.user;
    await Users.findOneAndUpdate(user, {"$push": {"likedPosts": postToLike}})
})

router.post('/unlike/:id', async (req, res) => {
    const postId = req.params.id;
    const postToUnlike = Posts.findOne({'id': postId});
    const user = req.body.user;
    await Users.findOneAndUpdate(user, {"$pull": {"likedPosts": postToUnlike}});
})

export default router