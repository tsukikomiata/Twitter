import HomeHeader from "../Head/HomeHeader";
import ProfileHeader from "../Head/ProfileHeader"
import Sidebar from "./Sidebar/Sidebar";
import Search from "./Search/Search.js";
import Trends from "./Trends/Trends";
import homeIcon from "../icons/SidebarIcons/HomeIcon"
import exploreIcon from "../icons/SidebarIcons/ExploreIcon";
import notificationsIcon from "../icons/SidebarIcons/NotificationsIcon";
import messagesIcon from "../icons/SidebarIcons/MessagesIcon";
import bookmarksIcon from "../icons/SidebarIcons/BookmarksIcon";
import listsIcon from "../icons/SidebarIcons/ListsIcon";
import profileIcon from "../icons/SidebarIcons/ProfileIcon";
import moreIcon from "../icons/SidebarIcons/MoreIcon";
import styles from "./Layout.module.css"
import React from "react";


function layout({item, children}: {item?: any, children?: any}) {
    const sidebarItems = [
        {icon: homeIcon, text: "Home", path: "/home"},
        {icon: exploreIcon, text: "Explore", path: "/explore"},
        {icon: notificationsIcon, text: "Notifications", path: "/notifications"},
        {icon: messagesIcon, text: "Messages", path: "/messages"},
        {icon: bookmarksIcon, text: "Bookmarks", path: "/bookmarks"},
        {icon: listsIcon, text: "Lists", path: "/lists"},
        {icon: profileIcon, text: "Profile", path: "/profile"},
        {icon: moreIcon, text: "More", path: "/more"}
    ]
    const trendsItems = [
        {type: "Trending in Russia", title: "White Rabbit", count: "1.445"},
        {type: "Trending in Russia", title: "White Rabbit", count: "1.445"},
        {type: "Trending in Russia", title: "White Rabbit", count: "1.445"},
        {type: "Trending in Russia", title: "White Rabbit", count: "1.445"},
        {type: "Trending in Russia", title: "White Rabbit", count: "1.445"},
    ]
    return (
        <div className={styles.layout}>
            <Sidebar options={sidebarItems} item={item}/>
            {children}
            {/*<Trends options={trendsItems}/>*/}
        </div>
    )
}

export default layout