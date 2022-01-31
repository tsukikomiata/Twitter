import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { Comments } from "./models/commentsModel";
import userRouter from './api/getUsers'
import postRouter from "./api/postRouter";
import trendRouter from "./api/trendRouter";
import searchRouter from "./api/searchRouter";
import createUser from "./api/createUser";
import loginUser from "./api/loginUser";
import getUserFromToken from "./api/getUserFromToken";
import dotenv from "dotenv";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const urlencodedParser = express.urlencoded({extended: false});

const port = '8000';

const url = process.env.MONGO_URI

// @ts-ignore
mongoose.connect(url).then(res => console.log("Mongo connected"))

app.get('/comment/:name', (req, res) => {
    Comments.findOne({name: req.params.name}, (err?: any, comment?: any) => {
        if (err) {
            res.send('Comment not found')
        } else {
            res.send(comment)
        }
    })
})


app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/api/trend', trendRouter);
app.use('/api/search', searchRouter);
app.use('/api/register', createUser);
app.use('/api/login', loginUser);
app.use('/api/verify', getUserFromToken);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})