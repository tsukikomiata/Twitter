import styles from "./ProfileIcons.module.css";

function moreIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.profile__headerActions__more}>
            <g>
                <circle cx="5" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
            </g>
        </svg>
    )
}

export default moreIcon()