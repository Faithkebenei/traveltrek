import React from 'react'
import styles from './Hero.module.scss'
import Header from '../Header/Header'
//import range from '../../images/range.png'
import range from '../../images/rangeoverlay.png'

const Hero = ( {text, location}) => {
  return (
    <>
    <div className={styles.header}>
            <div className={styles.image}>
                <img src={range} alt="Range Rover" />
            </div>
            <div className={styles.overlay}></div>
            <div className={styles.headerSection}>
            <Header />
            </div>

            <div className={styles.words}>
                <h3>{text}</h3>
                <h3>{location}</h3>
            </div>
        </div>
    </>
  )
}

export default Hero