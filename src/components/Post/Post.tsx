import React from "react";
import styles from "./Post.module.css";
import verifiedIcon from "../icons/PostIcons/VerifiedIcon";
import commentIcon from "../icons/PostIcons/CommentIcon"
import retweetsIcon from "../icons/PostIcons/RetweetsIcon"
import likesIcon from "../icons/PostIcons/LikesIcon"
import shareIcon from "../icons/PostIcons/ShareIcon"
import moreIcon from "../icons/PostIcons/MoreIcon"
import empty from "../icons/PostIcons/Empty"
import {NavLink} from "react-router-dom";
import getRequest from "../../Requests/GetRequest";


function Post(props: any) {

    let {post, userWatching} = props

    async function likeHandler(event: any) {
        if (userWatching === undefined) return 0;
        const userLikedPosts = userWatching.likedPosts;
        if (post in userLikedPosts) {
            event.target.classList.remove(styles.post__likesItem)
            event.target.classList.add(styles.post__footerItem)
            console.log(event.target)
        } else {
            event.target.classList.remove(styles.post__footerItem)
            event.target.classList.add(styles.post__likesItem)
            console.log(event.target)
        }
    }

    let VerifiedIcon;
    VerifiedIcon = verifiedIcon
    let likesClass
    likesClass = post in userWatching.likedPosts ? styles.post__likesItem : styles.post__footerItem;
    return (
        <div className={styles.post}>
            <NavLink to={"/user/"+post.user.tag} className={styles.post__navlink}>
            <img src={post.user.avatar} alt="avatar" className={styles.post__headerIcon}/>
            </NavLink>
            <div className={styles.post__content}>
                <div className={styles.post__header}>
                    <NavLink to={"/user/"+post.user.tag} className={styles.post__navlink}>
                    <p className={styles.post__headerDisplayName}>{post.user.name}</p>
                    </NavLink>
                    {VerifiedIcon}
                    <p className={styles.post__headerUsername}>{post.user.name}</p>
                    <span>·</span>
                    <p className={styles.post__headerTimeLeft}>{post.timeLeft}</p>
                    {moreIcon}
                </div>
                <p className={styles.post__text}>{post.text}</p>
                {post.image && <img src={post.image} alt="content" className={styles.post__image}/>}
                <div className={styles.post__footer}>
                    <div className={styles.post__footerItem}>
                        {commentIcon}
                        <p className={styles.post__footerInfo}>{post.countComments}</p>
                    </div>
                    <div className={styles.post__footerItem}>
                        {retweetsIcon}
                        <p className={styles.post__footerInfo}>{post.countRetweets}</p>
                    </div>
                    <button className={likesClass} onClick={likeHandler}>
                        {likesIcon}
                        <p className={styles.post__footerInfo} id="likesInfo">{post.countLikes}</p>
                    </button>
                    <div className={styles.post__footerItem}>
                        {shareIcon}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;