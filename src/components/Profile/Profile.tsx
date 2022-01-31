import styles from "./Profile.module.css"
import verifiedIcon from "../icons/ProfileIcons/VerifiedIcon"
import empty from "../icons/ProfileIcons/Empty"
import placeIcon from "../icons/ProfileIcons/PlaceIcon"
import hrefIcon from "../icons/ProfileIcons/HrefIcon"
import calendarIcon from "../icons/ProfileIcons/CalendarIcon"
import React from "react";


function Profile({user, slogan, place, site}: {user?: any, slogan?: any, place?: any, site?: any}) {
    let VerifiedIcon;
    VerifiedIcon = (user.verified) ? verifiedIcon : empty

    return (
        <div className={styles.profile}>
            <img src={user.backgroundImage} alt="background" className={styles.profile__image}/>
            <div className={styles.profile__header}>
                <img src={user.avatar} alt="avatar" className={styles.profile__avatar}/>
                <div className={styles.profile__headerActions}>
                    <button type="submit" className={styles.profile__headerActions__edit}>
                        Edit profile
                    </button>
                </div>
            </div>
            <div className={styles.profile__mainName}>
                <p className={styles.profileDisplayName}>{user.name}</p>
                {VerifiedIcon}
            </div>
            <p className={styles.profileUsername}>{user.tag}</p>
            <p className={styles.profileSlogan}>{slogan}</p>
            <div className={styles.profile__addInfo}>
                <div className={styles.profile__addInfo__item}>
                    {placeIcon}
                    <p className={styles.profile__addInfo__itemPlace}>{place}</p>
                </div>
                <div className={styles.profile__addInfo__item}>
                    {hrefIcon}
                    <p className={styles.profile__addInfo__itemSite}>{site}</p>
                </div>
                <div className={styles.profile__addInfo__item}>
                    {calendarIcon}
                    <p className={styles.profile__addInfo__itemText}>{"Joined " + user.regDate}</p>
                </div>
            </div>
            <div className={styles.profile__aboutFollow}>
                <p className={styles.profile__aboutFollow__following}>{user.following.length}</p>
                <span>Followings</span>
                <p className={styles.profile__aboutFollow__followers}>{user.followers.length}</p>
                <span>Followers</span>
            </div>
        </div>
    )
}

export default Profile

