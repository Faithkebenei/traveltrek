import React from 'react'
import styles from './Contact.module.scss'

import Hero from "../Hero/Hero"
import amg from "../../images/amg.png"
import Button from '../Button/Button'

import CallSection from "../CallSection/CallSection"
import Footer from "../Footer/Footer"

const Contact = () => {
  return (
    <div className={styles.contact}>
        <Hero text="Let's Get in Touch" location="Home/Contact" />
        <div className={styles.heading}>
          <h3>Get in Touch</h3>
        </div>
        <div className={styles.contactSection}>
          <div className={styles.contentBox}>
              <div className={styles.innerContainer}>
              <div className={styles.content}>
                <div className={styles.input}>
                  <label for="name">Name:</label>
                 <input type="text" id='name' />
                </div>
               <div className={styles.input}>
                 <label for="email">Email:</label>
                 <input type="text" id='email' />
                </div>
                <div className={styles.input}>
                 <label for="message">Message:</label>
                 <textarea name="" id="message" cols="30" rows="10"></textarea>
                </div>
              </div>
              <div className={styles.button}>
               <Button backgroundColor="#FF4D30" color="#fff" text="Submit" border="none" width="180px" borderRadius="5px" />
              </div>
              </div>
          </div>
          <div className={styles.image}>
            <div className={styles.imageContainer}>
              <img src={amg} alt="Amg" />
            </div>
          </div>
        </div>
        <CallSection />
        <Footer />
    </div>
  )
}

export default Contact