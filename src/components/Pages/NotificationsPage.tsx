import styles from "../Layout/Layout.module.css";
import avatar from "../../images/1.jpg";
import Layout from "../Layout/Layout";
import Search from "../Layout/Search/Search";
import Trends from "../Layout/Trends/Trends";
import NotificationsHeader from "../Head/NotificationsHeader";
import Notification from "../Notification/Notification"
import {useState} from "react";
import getRequest from "../../Requests/GetRequest";

const defaultTrends = [
    {type: "Trending in Russia", title: "White Rabbit", count: "1.445"},
    {type: "Trending in Russia", title: "White Rabbit", count: "1.445"},
    {type: "Trending in Russia", title: "White Rabbit", count: "1.445"},
    {type: "Trending in Russia", title: "White Rabbit", count: "1.445"},
    {type: "Trending in Russia", title: "White Rabbit", count: "1.445"},
]

function NotificationsPage() {
    const [trends, setTrends] = useState(defaultTrends)
    const API_URL = 'http://localhost:8000/trend'

    useState(async () => {
        const res = await getRequest(API_URL)
        setTrends(res);
    })

    console.log(trends)
    const notificationItems = [
        {avatar: avatar, text: "«Твоё лицо совершенно такое же».Стоит ли покупать iPhone 13 mini,если у вас есть iPhone 12 mini? Много ли отличий? Редактор TJ провела неделю с новым смартфоном послегода использования предыдущей модели — и попыталась ощутить разницу",
            tag: "#news",  name: "TJ"},
        {avatar: avatar, text: "«Твоё лицо совершенно такое же».Стоит ли покупать iPhone 13 mini,если у вас есть iPhone 12 mini? Много ли отличий? Редактор TJ провела неделю с новым смартфоном послегода использования предыдущей модели — и попыталась ощутить разницу",
            tag: "#news",  name: "TJ"},
        {avatar: avatar, text: "«Твоё лицо совершенно такое же».Стоит ли покупать iPhone 13 mini,если у вас есть iPhone 12 mini? Много ли отличий? Редактор TJ провела неделю с новым смартфоном послегода использования предыдущей модели — и попыталась ощутить разницу",
            tag: "#news",  name: "TJ"}
    ]
    return (
        <Layout item={"Notifications"}>
            <NotificationsHeader/>
            <div className={styles.content}>
                {notificationItems.map((option)=> <Notification avatar={option.avatar} name={option.name}
                                                        text={option.text} tag={option.tag}/>)}
            </div>
            <Search/>
            <Trends options={trends.slice(0, 5)}/>
        </Layout>
    )
}

export default NotificationsPage