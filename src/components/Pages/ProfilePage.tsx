import ProfileHeader from "../Head/ProfileHeader";
import styles from "../Layout/Layout.module.css";
import Profile from "../Profile/Profile";
import profileBgImage from "../../images/3.png";
import profileAvatar from "../../images/4.jpg";
import Layout from "../Layout/Layout";
import Search from "../Layout/Search/Search";
import Trends from "../Layout/Trends/Trends";
import ProfileTabBar from "../Profile/ProfileTabBar";
import { useState } from "react";
import Post from "../Post/Post";
import getRequest from "../../Requests/GetRequest";


const defaultUser = {
        "name": "SLAVA MARLOW",
        "tag": "slava",
        "hashedPassword": "$2a$10$GP271GEIiW58ytFILI1gVO2dBRvHhDIgGgO0q4EW8nnolH5.LGgMa",
        "posts": [],
        "likedPosts": [],
        "following": [],
        "followers": [],
        "_id": "61f3797afc22fe235645dba2",
        "regDate": "2022-01-28T05:04:58.971Z",
        "avatar": "https://cdn1.ozone.ru/s3/multimedia-3/c1200/6079430331.jpg",
        "backgroundImage": "https://i.imgur.com/ZjCDTrc.png",
        "__v": 0
    }


const defaultTrends = [
    {type: "Trending in Russia", title: "White Rabbit", count: "1.445"},
    {type: "Trending in Russia", title: "White Rabbit", count: "1.445"},
    {type: "Trending in Russia", title: "White Rabbit", count: "1.445"},
    {type: "Trending in Russia", title: "White Rabbit", count: "1.445"},
    {type: "Trending in Russia", title: "White Rabbit", count: "1.445"},
]

const defaultPosts = [
    {
        "post": {
            "user": {
                "name": "SLAVA MARLOW",
                "tag": "slava",
                "hashedPassword": "$2a$10$GP271GEIiW58ytFILI1gVO2dBRvHhDIgGgO0q4EW8nnolH5.LGgMa",
                "posts": [],
                "likedPosts": [],
                "following": [],
                "followers": [],
                "_id": "61f3797afc22fe235645dba2",
                "regDate": "2022-01-28T05:04:58.971Z",
                "avatar": "https://cdn1.ozone.ru/s3/multimedia-3/c1200/6079430331.jpg",
                "__v": 0
            },
            "text": "ya prosnulsya",
            "countComments": 12,
            "countLikes": 11,
            "countRetweets": 10,
            "isLiked": true,
            "timeLeft": "25m",
            "image": ""
        }
    }
]


function ProfilePage() {
    const [filterPosts, setFilterPosts] = useState(defaultPosts)
    const [posts, setPosts] = useState(defaultPosts)
    const [trends, setTrends] = useState(defaultTrends)
    const API_URL_trends = 'http://localhost:8000/trend'
    const API_URL_posts = 'http://localhost:8000/post'

    useState(() => {
        // getRequest(defaultPosts, setPosts, API_URL_posts)
        // getRequest(defaultPosts, setFilterPosts, API_URL_posts)
        // getRequest(defaultTrends, setTrends, API_URL_trends)
    })

    const Tweets = filterPosts.map((value) => {
        return (
            <Post post={value.post}/>
        );
    });
    return (
        <Layout item={"Profile"}>
            <ProfileHeader login={"TJ"}/>
            <div className={styles.content}>
                <Profile user={defaultUser} slogan={"чёта буквы"}
                />
                <ProfileTabBar posts={posts} setPosts={setFilterPosts}/>
                {Tweets}
            </div>
            <Search setPosts={setFilterPosts}/>
            <Trends options={trends.slice(0, 5)}/>
        </Layout>
    )
}

export default ProfilePage