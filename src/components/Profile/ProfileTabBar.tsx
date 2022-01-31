import React, { useState } from "react";
import styles from "./ProfileTabs.module.css";
import Tab from "./ProfileTabItem";


const ProfileTabBar = ({posts, setPosts}: {posts?: any, setPosts?: any}) => {
    const tabs = [
        {
            name: "Tweets",
            onclick: () => setPosts(posts),
        },
        {
            name: "Tweets & replies",
            onclick: () => setPosts(posts),
        },
        {
            name: "Media",
            onclick: () => setPosts(posts.filter((value?: any) => value.image)),
        },
        {
            name: "Likes",
            onclick: () => setPosts(posts.filter((value?: any) => value.isLiked)),
        },
    ];
    const [activeTab, setActiveTab] = useState(0);
    const tabItems = tabs.map((value, index) => (
        <Tab
            activeChanger={() => setActiveTab(index)}
            dataChanger={value.onclick}
            tabTitle={value.name}
            isActive={activeTab === index}
        />
    ));
    return <div className={styles.container}>{tabItems}</div>;
};

export default ProfileTabBar;