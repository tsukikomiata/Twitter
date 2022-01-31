import React from "react";
import styles from "./TweetBox.module.css";
import imageIcon from "../icons/TweetBoxIcon/ImageIcon"
import gifIcon from "../icons/TweetBoxIcon/GifIcon"
import graphIcon from "../icons/TweetBoxIcon/GraphIcon"
import smileIcon from "../icons/TweetBoxIcon/SmileIcon"
import calendarIcon from "../icons/TweetBoxIcon/CalendarIcon"
import postRequest from "../../Requests/PostRequest"

const defaultData = {
    id: 9,
    avatar: "../../images/1.jpg",
    displayName: "displayName",
    verified: false,
    username: "username",
    timeLeft: "0",
    countComments: 0,
    countLikes: 0,
    countRetweets: 0,
    isLiked: false
}

function TweetBox({user}: {user: any}) {
    const tweetPostRequest = (event?: any) => {
        console.log(event.target.elements.image.value)
        event.preventDefault()
        const data = {
            timeLeft: "0",
            text: event.target.elements.text.value,
            image: "",
            countComments: 0,
            countLikes: 0,
            countRetweets: 0,
            isLiked: false
        }
        if (data.text) {
            postRequest(data, "https://localhost:8000/api/post")
            event.target.elements.text.value = ""
        }
    }

    return (
        <div className={styles.tweetBox}>
            <form onSubmit={tweetPostRequest}>
                <div className={styles.tweetBox__input}>
                    <img src={user.avatar} alt="img" className={styles.tweetBox__inputIcon}/>
                    <input
                        placeholder="What's happening?"
                        type="text"
                        id="text"
                    />
                </div>
                <div className={styles.tweetBox__footer}>
                    {imageIcon}
                    {gifIcon}
                    {graphIcon}
                    {smileIcon}
                    {calendarIcon}
                    <button type="submit" className={styles.tweetBox__button}>
                        Tweet
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TweetBox;

