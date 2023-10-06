import React from 'react'
import styles from './HomeTestimonials.module.scss'

import TestimonialCard from '../TestimonialCard/TestimonialCard'

import faith from '../../images/faith.png';
import arianna from '../../images/arianna.png';
import ryan from '../../images/ryan.png';

const HomeTestimonials = () => {
  return (
    <div className={styles.homeTestimonials}>
        <div className={styles.headingText}>
            <h3 className={styles.heading}>What People Say About Us</h3>
        </div>
        <div className={styles.testimonials}>
            <TestimonialCard words='“Exceptional rental experience. Reliable vehicles and friendly staff. Will rent again without hesitation.”' name='Faith Kebenei' image={faith}/>
            <TestimonialCard words='"Top-notch service that exceeded my expectations. They made my vacation stress-free and enjoyable."' name='Ariana Ndanu' image={arianna}/>
            <TestimonialCard words='"Renting with them is a no-brainer. Quality cars, exceptional service, and unbeatable prices."' name='Ryan Choge' image={ryan}/>
        </div>
    </div>
  )
}

export default HomeTestimonials