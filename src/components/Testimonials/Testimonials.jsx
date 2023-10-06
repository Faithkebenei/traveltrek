import React from 'react'
import styles from './Testimonials.module.scss';

import Hero from '../Hero/Hero'
import HomeTestimonials from '../HomeTestimonials/HomeTestimonials'
import CallSection from '../CallSection/CallSection'
import Footer from '../Footer/Footer'

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
        <Hero text="What do People Say About Us" location="Home/ Testimonials" />
        <HomeTestimonials />
        <CallSection />
        <Footer />
    </div>
  )
}

export default Testimonials