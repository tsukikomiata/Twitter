import styles from "../Layout/Layout.module.css";
import Layout from "../Layout/Layout";
import Explore from "../Explore/Explore"
import {useState} from "react";
import Post from "../Post/Post";
import {useParams} from "react-router-dom";
import Users from "../Users/Users";
import PostHeader from "../Head/PostHeader"
import getRequest from "../../Requests/GetRequest";

const defaultPost =
    {
        "user": {
            "name": "Cat",
            "tag": "cat",
            "hashedPassword": "$2a$10$GP271GEIiW58ytFILI1gVO2dBRvHhDIgGgO0q4EW8nnolH5.LGgMa",
            "posts": [],
            "likedPosts": [],
            "following": [],
            "followers": [],
            "_id": "61f3797afc22fe235645dba2",
            "regDate": "2022-01-28T05:04:58.971Z",
            "__v": 0
        },
        "text": "хочу спать",
        "countComments": 12,
        "countLikes": 11,
        "countRetweets": 10,
        "isLiked": true,
        "timeLeft": "25m",
        "image": "",
        "id": 12
    }


const defaultUsers = [
    {id: 1, name: "name"},
    {id: 1, name: "name"},
    {id: 1, name: "name"},
    {id: 1, name: "name"},
    {id: 1, name: "name"},
]

function ExplorePage() {
    const [post, setPost] = useState(defaultPost)
    const [users, setUsers] = useState(defaultUsers)
    const API_URL_users = 'http://localhost:8000/user'
    const API_URL_post = 'http://localhost:8000/api/post/' + useParams().id

    useState(async () => {
        const res = await getRequest(API_URL_post);
        setPost(res);
    })

    return (
        <Layout item={"Explore"}>
            <PostHeader id={post.id}/>
            <div className={styles.content}>
                <Post post={post}/>
            </div>
            <Users options={users.slice(0, 5)}/>
        </Layout>
    )
}

export default ExplorePage