import ProfileHeader from "../Head/ProfileHeader";
import styles from "../Layout/Layout.module.css";
import Profile from "../Profile/Profile";
import profileBgImage from "../../images/3.png";
import profileAvatar from "../../images/4.jpg";
import Layout from "../Layout/Layout";
import Search from "../Layout/Search/Search";
import Trends from "../Layout/Trends/Trends";
import ProfileTabBar from "../Profile/ProfileTabBar";
import {useEffect, useState} from "react";
import Post from "../Post/Post";
import getRequest from "../../Requests/GetRequest";


const defaultUser = {
        "name": "Empty~",
        "tag": "empty",
        "hashedPassword": "$2a$10$GP271GEIiW58ytFILI1gVO2dBRvHhDIgGgO0q4EW8nnolH5.LGgMa",
        "posts": [],
        "likedPosts": [],
        "following": [],
        "followers": [],
        "_id": "61f3797afc22fe235645dba2",
        "regDate": "2022-01-28T05:04:58.971Z",
        "avatar": "https://pbs.twimg.com/profile_images/1053797216698032130/AW12a1pq_400x400.jpg",
        "backgroundImage": "https://pbs.twimg.com/profile_banners/987293652253720576/1540080303/1500x500",
        "__v": 0
    }


const defaultTrends = [
    {type: "Trending in Russia", title: "Пухлый кролик", count: "1.445"},
    {type: "Trending in Russia", title: "Пухлый кролик", count: "1.445"},
    {type: "Trending in Russia", title: "Пухлый кролик", count: "1.445"},
    {type: "Trending in Russia", title: "Пухлый кролик", count: "1.445"},
    {type: "Trending in Russia", title: "Пухлый кролик", count: "1.445"},
]

const defaultPosts = [
    {
        "post": {
            "user": {
                "name": "Empty~",
                "tag": "empty",
                "hashedPassword": "$2a$10$GP271GEIiW58ytFILI1gVO2dBRvHhDIgGgO0q4EW8nnolH5.LGgMa",
                "posts": [],
                "likedPosts": [],
                "following": [],
                "followers": [],
                "_id": "61f3797afc22fe235645dba2",
                "regDate": "2022-01-28T05:04:58.971Z",
                "avatar": "https://pbs.twimg.com/profile_images/1053797216698032130/AW12a1pq_400x400.jpg",
                "__v": 0
            },
            "text": "Невероятно хочется кушать",
            "countComments": 1,
            "countLikes": 3,
            "countRetweets": 1000,
            "isLiked": true,
            "timeLeft": "25m",
            "image": ""
        }
    }
]


function ProfilePage({user}: {user: any}) {
    const [filterPosts, setFilterPosts] = useState(defaultPosts)
    const [posts, setPosts] = useState(defaultPosts)
    const [trends, setTrends] = useState(defaultTrends)

    useEffect(() => {
        let isMounted = true;
        const getAll = async () => {
            const resPost = await getRequest('http://localhost:8000/api/post');
            if (isMounted) setPosts(resPost.post);
            if (isMounted) setFilterPosts(resPost.post);
            const resTrends = await getRequest('http://localhost:8000/api/trend');
            if (isMounted) setTrends(resTrends.trends);
        }

        getAll();
        return () => {isMounted = false}
    })

    const Tweets = filterPosts.slice(0).reverse().map((value) => {
        return (
            <Post post={value} userWatching={user}/>
        );
    });
    return (
        <Layout item={"Profile"}>
            <ProfileHeader tag={"Empty~"}/>
            <div className={styles.content}>
                <Profile user={user} slogan={"вечно желающий спать пеликан"}/>
                <ProfileTabBar posts={posts} setPosts={setFilterPosts}/>
                {Tweets}
            </div>
            <Search setPosts={setFilterPosts}/>
            <Trends options={trends.slice(0, 5)}/>
        </Layout>
    )
}

export default ProfilePage