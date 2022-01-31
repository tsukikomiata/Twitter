import styles from "./SidebarOption.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

function SidebarOption({text, Icon, active, path}: {text?: any, Icon?: Symbol, active?: any, path?: any}) {
    return (
        <div className={active ? styles.sidebarOptionActive : styles.sidebarOption}>
            {Icon}
            <NavLink to={path} className={active ? styles.sidebarOptionActive__text : styles.sidebarOption__text}>{text}</NavLink>
        </div>
    )
}

export default SidebarOption;