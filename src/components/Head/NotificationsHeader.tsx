import optionIcon from "../icons/HeadIcons/OptionIcon"
import styles from "./NotificationsHeader.module.css"

function homeHeader() {
    return (
        <div className={styles.notificationsHead}>
            <p>Notifications</p>
            {optionIcon}
        </div>
    )
}

export default homeHeader