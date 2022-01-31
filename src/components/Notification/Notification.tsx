import styles from "./Notification.module.css"
import React from "react";

function notification({avatar, name, text, tag}: {avatar?: any, name?: any, text?: any, tag?: any}) {
    return (
        <div className={styles.notification}>
            <img src={avatar} alt="avatar" className={styles.notification_avatar}/>
            <p className={styles.notification_headText}>In case you missed <span>{name}</span>'s Tweet</p>
            <p className={styles.notification_text}>{text}</p>
            <p className={styles.notification_tag}>{tag}</p>
        </div>
    )
}

export default notification