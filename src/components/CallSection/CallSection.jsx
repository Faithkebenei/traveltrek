import React from 'react'
import styles from './CallSection.module.scss'

import merc from '../../images/merc.png'
const CallSection = () => {
  return (
    <div className={styles.callSection}>
        <div className={styles.overlay}></div>
        <img src={merc} alt="Mercedes" />
        <p className={styles.text}>Call <span>0723850918</span> Today To Reserve a Car</p>
    </div>
  )
}

export default CallSection