import HomeHeader from "../Head/HomeHeader";
import styles from "../Layout/Layout.module.css";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import Layout from "../Layout/Layout";
import Search from "../Layout/Search/Search";
import Trends from "../Layout/Trends/Trends";
import React, {useState} from "react";
import getRequest from "../../Requests/GetRequest";


const defaultPosts = [
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
                "verified": true,
                "__v": 0
            },
            "text": "хочу спать",
            "countComments": 12,
            "countLikes": 11,
            "countRetweets": 10,
            "isLiked": true,
            "timeLeft": "25m",
            "image": ""
    }
]

const defaultTrends = [
    {type: "Trending in Russia", title: "Пухлый кролик", count: "1.445"},
    {type: "Trending in Russia", title: "Пухлый кролик", count: "1.445"},
    {type: "Trending in Russia", title: "Пухлый кролик", count: "1.445"},
    {type: "Trending in Russia", title: "Пухлый кролик", count: "1.445"},
    {type: "Trending in Russia", title: "Пухлый кролик", count: "1.445"},
]

function HomePage({user}: {user: object}) {
    const [posts, setPosts] = useState(defaultPosts)
    const [trends, setTrends] = useState(defaultTrends)

    useState(async () => {
        const resPosts = await getRequest("http://localhost:8000/api/post")
        if (resPosts.success) setPosts(resPosts.post);
        const resTrends = await getRequest("http://localhost:8000/api/trend")
        if (resTrends.success) setTrends(resTrends.trends);
    })

    return (
        <Layout item={"Home"}>
            <HomeHeader/>
            <div className={styles.content}>
                <TweetBox user={user} posts={posts} setPosts={setPosts}/>
                {posts.slice(0).reverse().map((option) => <Post post={option} userWatching={user}/>)}
            </div>
            <Search setPosts={setPosts}/>
            <Trends options={trends}/>
        </Layout>
    )
}

export default HomePage