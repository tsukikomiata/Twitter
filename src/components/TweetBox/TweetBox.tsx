import React from "react";
import styles from "./TweetBox.module.css";
import imageIcon from "../icons/TweetBoxIcon/ImageIcon"
import gifIcon from "../icons/TweetBoxIcon/GifIcon"
import graphIcon from "../icons/TweetBoxIcon/GraphIcon"
import smileIcon from "../icons/TweetBoxIcon/SmileIcon"
import calendarIcon from "../icons/TweetBoxIcon/CalendarIcon"
import postRequest from "../../Requests/PostRequest"

function TweetBox({user, posts, setPosts}: {user: any, posts: any, setPosts: any}) {
    const tweetPostRequest = async (event?: any) => {
        event.preventDefault()
        const data = {
            user: user,
            timeLeft: "0",
            text: event.target.elements.text.value,
            countComments: 0,
            countLikes: 0,
            countRetweets: 0
        }
        if (data.text) {
            const post = await postRequest(data, "http://localhost:8000/api/post");
            const newPosts = [...posts, post.post];
            setPosts(newPosts);
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

