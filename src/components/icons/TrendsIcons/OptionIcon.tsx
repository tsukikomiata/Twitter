import styles from "./TrendsIcons.module.css";


function optionIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.trendsOption__icon}>
            <g>
                <circle cx="5" cy="12" r="2"/>
                <circle cx="12" cy="12" r="2"/>
                <circle cx="19" cy="12" r="2"/>
            </g>
        </svg>
    )
}

export default optionIcon()
