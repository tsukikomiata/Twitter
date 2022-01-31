import homeIcon from "../icons/HeadIcons/HeadHomeIcon"
import styles from "./PostHeader.module.css"
import React from "react";

function postHeader({id}: {id: number | string}) {
    return (
        <div className={styles.postHead}>
            <p>{id}</p>
            {homeIcon}
        </div>
    )
}

export default postHeader