import React from 'react'
import styles from './Card.module.scss'

const Card = ({icon, heading, description}) => {
  return (
    <div className={styles.card}>
        <div className={styles.circle}>{icon}</div>
        <div className={styles.text}>
            <h3>{heading}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Card