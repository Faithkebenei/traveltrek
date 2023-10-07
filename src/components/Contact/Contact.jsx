import React from 'react'
import styles from './Contact.module.scss'

import Hero from "../Hero/Hero"

const Contact = () => {
  return (
    <div className={styles.contact}>
        <Hero text="Let's Get in Touch" location="Home/Contact" />
    </div>
  )
}

export default Contact