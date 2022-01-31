import styles from "./Users.module.css"
import UsersOption from "./UsersOption";
import headerIcon from "../icons/TrendsIcons/HeaderIcon";
import React from "react";


function Users({options}: {options: any}) {
    return (
        <div className={styles.users}>
            <header>
                <p className={styles.users__title}>You can follow</p>
                {headerIcon}
            </header>
            {options.map((option?: any)=><UsersOption name={option.name}/>)}
            <p className={styles.users__more}>Show more</p>
        </div>
    )

}

export default Users;