import React from 'react'
import styles from './About.module.scss'

import Hero from '../Hero/Hero'
import cars from '../../images/threecars.png'


const About = () => {
  return (
    <div className={styles.about}>
        <Hero text ="Who are We?" location="Home/About" />
        <div className={styles.textCar}>
          <div className={styles.text}>
            <p>At TravelTrek we're your trusted partner for exceptional car rental experiences. Choose from our diverse fleet and enjoy hassle-free journeys.</p>
          </div>
          <div className={styles.cars}>
            <img src={cars} alt="Cars" />
          </div>
        </div>
    </div>
  )
}

export default About