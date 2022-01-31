import homeIcon from "../icons/HeadIcons/HeadHomeIcon"
import styles from "./HomeHeader.module.css"

function homeHeader() {
    return (
        <div className={styles.homeHead}>
            <p>Home</p>
            {homeIcon}
        </div>
    )
}

export default homeHeader