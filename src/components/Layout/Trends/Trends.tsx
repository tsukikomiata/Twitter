import styles from "./Trends.module.css"
import TrendsOption from "./TrendsOption";
import headerIcon from "../../icons/TrendsIcons/HeaderIcon";
import React from "react";

function Trends({options}: {options?: any}) {
    return (
        <div className={styles.trends}>
            <header>
                <p className={styles.header__title}>Trends for you</p>
                {headerIcon}
            </header>
            {options.map((option?: any)=><TrendsOption type={option.type} title={option.title} countTweets={option.count}/>)}
            <p className={styles.trends__more}>Show more</p>
        </div>
    )

}

export default Trends;