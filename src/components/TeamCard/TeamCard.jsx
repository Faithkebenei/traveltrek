import React from 'react'
import styles from './TeamCard.module.scss'

import { FaLinkedin } from "react-icons/fa6";


const TeamCard = ({image, name, occupation}) => {
  return (
    <div className={styles.card}>
        <div className={styles.imageContainer}>
            <img src={image} alt="Team Image" />
        </div>
        <div className={styles.content}>
        <h3>{name}</h3>
        <p>{occupation}</p>
        <FaLinkedin color="#0072b1" size="3rem" />
        </div>
    </div>
  )
}

export default TeamCard