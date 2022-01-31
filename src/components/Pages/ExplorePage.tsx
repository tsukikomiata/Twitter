import styles from "../Layout/Layout.module.css";
import Layout from "../Layout/Layout";
import ExploreHeader from "../Head/ExploreHeader"
import Explore from "../Explore/Explore"
import {useState} from "react";
import getRequest from "../../Requests/GetRequest";

const defaultPosts = [
    {
        id: 5,
        avatar: "lkj",
        displayName: "lk",
        verified: true,
        username: "String",
        timeLeft: "25",
        text: "String",
        image: "lklk;kok",
        countComments: 8,
        countLikes: 9,
        countRetweets: 4,
        isLiked: false
    },
]

const defaultTrends = [
    {type: "Trending in Russia", title: "Пухлый кролик", count: "1.445"},
    {type: "Trending in Russia", title: "Пухлый кролик", count: "1.445"},
    {type: "Trending in Russia", title: "Пухлый кролик", count: "1.445"},
    {type: "Trending in Russia", title: "#нюдсочетверг", count: "1.445"},
    {type: "Trending in Russia", title: "Пухлый кролик", count: "1.445"},
]

function ExplorePage() {
    const [trends, setTrends] = useState(defaultTrends)
    const [posts, setPosts] = useState(defaultPosts)


    return (
        <Layout item={"Explore"}>
            <ExploreHeader setPosts={setPosts}/>
            <div className={styles.content}>
                <Explore props={posts} trendProps={trends.slice(0, 5)}/>
            </div>
        </Layout>
    )
}

export default ExplorePage