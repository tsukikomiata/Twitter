import styles from "./ProfileTabs.module.css";
import React from "react";

const Tab = ({dataChanger, activeChanger, tabTitle, isActive}: {dataChanger?: any, activeChanger?: any, tabTitle?: any, isActive?: any}) => (
    <div
        className={`${styles.tab} ${isActive && styles.active_tab}`}
        onClick={() => {
            dataChanger();
            activeChanger();
        }}
    >
        <span className={styles.tab_title}>{tabTitle}</span>
    </div>
);

export default Tab;