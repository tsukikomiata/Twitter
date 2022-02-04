import Trends from "../Layout/Trends/Trends"
import Post from "../Post/Post"
import styles from "./Explore.module.css";
import startIcon from "../icons/ExploreIcons/StartIcon"
import endIcon from "../icons/ExploreIcons/EndIcon"
import optionsIcon from "../icons/PostIcons/MoreIcon"
import React from "react";


function explore({props, trendProps, user}: {props?: any, trendProps?: any, user?: any}) {
    return (
        <div className={styles.explore}>
            <Trends options={trendProps}/>
            <header className={styles.startBlock}>
                <div className={styles.notificationsMark}>
                    {startIcon}
                    <p>Tech news</p>
                </div>
                {optionsIcon}
            </header>
            <div className={styles.explore__items}>
                {props.map((option?: any)=> <Post post={option} userWatching={user}/>)}
            </div>
            <nav className={styles.endBlock}>
                <div className={styles.notificationsMark}>
                    {endIcon}
                    <div>
                        <p className={styles.block_name}>Tech news</p>
                        <p className={styles.block_subname}>News</p>
                    </div>
                </div>
                <button type={"submit"} className={styles.blockButton}>Following</button>
            </nav>
        </div>
    )
}

export default explore