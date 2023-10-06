import React from 'react'
import styles from './Logo.module.scss'
import { FaCarSide } from "react-icons/fa";

const Logo = () => {
  return (
            <div className={styles.logo}>
                <FaCarSide size="4rem" color="#FF4D30"/>
                <p><span>TravelTrek</span><br></br> Rentals</p>
            </div>
  )
}

export default Logo