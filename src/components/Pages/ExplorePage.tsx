import styles from "../Layout/Layout.module.css";
import Layout from "../Layout/Layout";
import ExploreHeader from "../Head/ExploreHeader"
import Explore from "../Explore/Explore"
import React, {useEffect, useState} from "react";
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

function ExplorePage({user}: {user: any}) {
    const [trends, setTrends] = useState(defaultTrends)
    let [posts, setPosts] = useState(defaultPosts)

    useState(async () => {
        const post = await getRequest("http://localhost:8000/api/post");
        if (post.success) setPosts(post.post);
        const resTrends = await getRequest("http://localhost:8000/api/trend");
        if (resTrends.success) setTrends(resTrends.trends)
    })


    return (
        <Layout item={"Explore"}>
            <ExploreHeader setPosts={setPosts}/>
            <div className={styles.content}>
                <Explore props={posts} trendProps={trends.slice(0, 5)} user={user}/>
            </div>
        </Layout>
    )
}

export default ExplorePage