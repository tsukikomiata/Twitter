import express from 'express';
import { Trends } from "../models/trendsModel.js";

const router = express.Router();

router.get('/', (req, res) => {
    Trends.find({}, (err?: any, trends?: any) => {
        if (err) {
            res.status(500).json({"success": false})
        } else {
            res.status(200).json({"success": true, "trends": trends})
        }
    })
});

router.post('/', (req, res) => {
    const {type, title, count} = req.body
    const newTrend = new Trends({type: type,
        title: title,
        count: count})
    newTrend.save((err?: any) => {
        if (err) {
            res.status(500).json({"success": false, "error": err})
        } else {
            res.status(200).json({"success": true, "trend": newTrend})
        }
    })
})


export default router