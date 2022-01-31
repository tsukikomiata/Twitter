import styles from "./TrendsOption.module.css"
import optionIcon from "../../icons/TrendsIcons/OptionIcon"
import React from "react";

function TrendsOption({type, title, countTweets}: {type?: any, title?: any, countTweets?: any}) {
    return (
        <div className={styles.trendsOption}>
            <div className={styles.trendsOption_info}>
                <p className={styles.trendsOption_info__type}>{type}</p>
                <p className={styles.trendsOption_info__title}>{title}</p>
                <p className={styles.trendsOption_info__countTweets}>{countTweets + ' Tweets'}</p>
            </div>
            {optionIcon}
        </div>
    )
}

export default TrendsOption;