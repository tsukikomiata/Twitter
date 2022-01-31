import {useParams} from "react-router-dom";
import {Navigate} from "react-router";
import ProfileHeader from "../Head/ProfileHeader";
import styles from "../Layout/Layout.module.css";
import UserProfile from "../UserProfile/UserProfile";
import Layout from "../Layout/Layout";
import Search from "../Layout/Search/Search";
import Trends from "../Layout/Trends/Trends";
import React, {useState} from "react";
import getRequest from "../../Requests/GetRequest";

const defaultTrends = [
    {type: "Trending in Russia", title: "Пухлый кролик", count: "1.445"},
    {type: "Trending in Russia", title: "Пухлый кролик", count: "1.445"},
    {type: "Trending in Russia", title: "Пухлый кролик", count: "1.445"},
    {type: "Trending in Russia", title: "Пухлый кролик", count: "1.445"},
    {type: "Trending in Russia", title: "Пухлый кролик", count: "1.445"},
]
const defaultUser = {
    name: "name",
    password: "123456"
}


function UserProfilePage() {
    const tag = useParams().tag;
    let [user, setUser] = useState(defaultUser)
    const [trends, setTrends] = useState(defaultTrends)

    useState(async () => {
        const res = await getRequest("https://localhost:8000/api/user/"+tag);
        if (res.success) {
            user = res.user;
            setUser(user);
        }
    })

    if (user === defaultUser) return <Navigate to="/home"/>

    return (
        <Layout item={""}>
            <ProfileHeader tag={user.name}/>
            <div className={styles.content}>
                <UserProfile user={user}/>
            </div>
            <Search/>
            <Trends options={trends.slice(0, 5)}/>
        </Layout>
    )
}

export default UserProfilePage