import React from 'react'
import styles from './Team.module.scss'

import Hero from '../Hero/Hero'

const Team = () => {
  return (
    <div className={styles.team}>
        <Hero text="Meet Our Amazing Experts" location="Home/Our Team" />
    </div>
  )
}

export default Team