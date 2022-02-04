import express from 'express';
import {Users} from "../models/usersModel";

const router = express.Router();

router.get('/', (req, res) => {
    Users.find({}, (err?: any, users?: any) => {
        if (err) {
            res.status(400).json({"success": false, "message": "No users"})
        } else {
            res.status(200).json({"success": true, "message": "Users list", "users": users})
        }
    })
});

router.get('/:tag', (req, res) => {
    Users.findOne({tag: req.params.tag}, (err?: any, user?: any) => {
        if (err) {
            res.status(400).json({"success": false, "message": "User not found", "error": err})
        } else {
            res.status(200).json({"success": true, "message": "User found", "user": user})
        }
    })
})

export default router