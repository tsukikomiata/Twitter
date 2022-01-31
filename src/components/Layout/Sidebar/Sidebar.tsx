import styles from "./Sidebar.module.css";
import SidebarOption from "./SidebarOption";
import twitterIcon from "../../icons/SidebarIcons/TwitterIcon"
import React from "react";


function Sidebar({options, item}: {options?: any, item?: any}) {
    return (
        <div className={styles.sidebar}>
            {twitterIcon}
            <div className={styles.sidebar__items}>
                {options.map((option?: any)=> <SidebarOption Icon={option.icon} text={option.text} path={option.path}
                                                      active={(option.text === item)}/>)}
            </div>
            <button className={styles.sidebar__tweetButton}>
                Tweet
            </button>
        </div>
    );
}

export default Sidebar;
