import express from "express";
import {Users} from "../models/usersModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config()

const router = express.Router()

router.post('/', async (req, res) => {
    const { name, password } = req.body;
    Users.findOne({tag: name}, async (err?: any, user?: any) => {
        if (err) {
            res.status(500).send('Server error!!!!!!!');
        } else if (!user) {
            res.status(400).send('User with this username does not exist');
        } else {
            const auth = await bcrypt.compare(password, user.hashedPassword)
            if (auth) {
                const secret = process.env.TOKEN_SECRET;
                const payload = { name };
                // @ts-ignore
                const token = jwt.sign(payload, secret, {'expiresIn': '12h'});
                res.cookie('jwt', token, {'httpOnly': false}).status(200)
                    .json({'token': token, 'user': user})
            } else {
                res.status(400).send('Wrong password')
            }
        }}
    )
})

export default router;