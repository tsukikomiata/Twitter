import Search from "../Layout/Search/Search";
import optionIcon from "../icons/HeadIcons/OptionIcon"
import styles from "./ExploreHeader.module.css"
import React from "react";

function exploreHeader({setPosts}: {setPosts?: any}){
    return (
        <div className={styles.explore_header}>
            <Search setPosts={setPosts}/>
            {optionIcon}
        </div>
    )
}

export default exploreHeader