import React from 'react'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'

import Logo from '../../components/Logo/Logo'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.logo}>
        <Logo />
        </div>
        <div className={styles.company}>
            <h3>Company</h3>
            <ul>
                <li><Link to="about" >About</Link></li>
                <li><Link to="login" >Sign Up/ Login</Link></li>
                <li><Link to="careers" >Careers</Link></li>
                <li><Link to="team" >Our Team</Link></li>
            </ul>
        </div>
        <div className={styles.workingHours}>
            <h3>Working Hours</h3>
            <p>Mon - Fri 9:00am - 10:00pm</p>
            <p>Sat - Sun 10:00am - 9:00pm</p>
        </div>
        <div className={styles.contact}>
            <h3>Contact</h3>
            <p>PO Box 1661 - 30100 Eldoret</p>
            <p>Eldoret HQ: 0723850918</p>
            <p>Nairobi: 0723850918</p>
            <p>Kisumu: 0723850918</p>
            <p>Mombasa: 0723850918</p>
            <p>Email: contact@traveltrec.com</p>
        </div>
    </div>
  )
}

export default Footer