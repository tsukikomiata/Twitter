import styles from "./UsersOption.module.css"
import optionIcon from "../icons/TrendsIcons/OptionIcon"
import React from "react";


function UsersOption({name}: {name?: any}) {
    return (
        <div className={styles.usersOption}>
            <p className={styles.users_info}>{name}</p>
            {optionIcon}
        </div>
    )
}

export default UsersOption;