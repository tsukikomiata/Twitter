import express from "express";
import {Users} from "../models/usersModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config()

const router = express.Router();

router.post('/', async (req, res) => {
    const {name, tag, password} = req.body;

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = await bcrypt.hash(password, salt);

    let user = new Users({name: name, tag: tag, hashedPassword: hashedPassword});
    user.save((err?: any) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error while registering, please, try again")
        } else {
            const secret = process.env.TOKEN_SECRET;
            const payload = { name };
            // @ts-ignore
            const token = jwt.sign(payload, secret, {'expiresIn': '12h'});
            res.status(200).json({'token': token, 'user': user});

        }
    });
});

export default router;