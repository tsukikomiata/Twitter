import backArrowIcon from "../icons/HeadIcons/BackArrowIcon"
import styles from "./ProfileHeader.module.css"
import React from "react";


function profileHeader({tag}: {tag : string}) {
    return (
        <div className={styles.profileHead}>
            {backArrowIcon}
            <div className={styles.profileHead__text}>
                <p className={styles.profileHead__text_name}>{tag}</p>
                <p className={styles.profileHead__text_tweets}>1 Tweet</p>
            </div>
        </div>
    )
}

export default profileHeader