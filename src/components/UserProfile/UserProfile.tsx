import styles from "./UserProfile.module.css"
import verifiedIcon from "../icons/ProfileIcons/VerifiedIcon"
import empty from "../icons/ProfileIcons/Empty"
import calendarIcon from "../icons/ProfileIcons/CalendarIcon"
import moreIcon from "../icons/ProfileIcons/MoreIcon";
import mailIcon from "../icons/ProfileIcons/MailIcon";
import React from "react";


function userProfile({user}: {user?: any}) {
    let VerifiedIcon;
    if (user.verified) {
        VerifiedIcon = verifiedIcon;
    } else {
        VerifiedIcon = empty;
    }
    return (
        <div className={styles.userProfile}>
            <img src={user.backgroundImage} alt="background" className={styles.userProfile__image}/>
            <div className={styles.userProfile__header}>
                <img src={user.avatar} alt="avatar" className={styles.userProfile__avatar}/>
                <div className={styles.userProfile__headerActions}>
                    {moreIcon}
                    {mailIcon}
                    <button type="submit" className={styles.userProfile__headerActions__follow}>
                        Follow
                    </button>
                </div>
            </div>
            <div className={styles.userProfile__mainName}>
                <p className={styles.userProfileDisplayName}>{user.name}</p>
                {VerifiedIcon}
            </div>
            <p className={styles.userProfileUsername}>{user.tag}</p>
            <div className={styles.userProfile__addInfo}>
                <div className={styles.userProfile__addInfo__item}>
                    {calendarIcon}
                    <p className={styles.userProfile__addInfo__itemText}>{"Joined " + user.regDate}</p>
                </div>
            </div>
            <div className={styles.userProfile__aboutFollow}>
                <p className={styles.userProfile__aboutFollow__following}>{user.following.length}</p>
                <span>Followings</span>
                <p className={styles.userProfile__aboutFollow__followers}>{user.followers.length}</p>
                <span>Followers</span>
            </div>
        </div>
    )
}

export default userProfile

