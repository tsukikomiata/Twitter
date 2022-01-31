import express from 'express';
import { Trends } from "../models/trendsModel.js";

// const urlencodedParser = express.urlencoded({extended: false});


const router = express.Router();


router.get('/', (req, res) => {
    Trends.find({}, (err?: any, post?: any) => {
        if (err) {
            res.send('Posts not found')
        } else {
            res.send(post)
        }
    })
});

export default router