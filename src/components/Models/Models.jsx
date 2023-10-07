import React from 'react'
import styles from "./Models.module.scss"

import Hero from '../Hero/Hero'

const Models = () => {
  return (
    <div className={styles.models}>
        <Hero text="Our Diverse Fleet" location="Home/Vehicle Models" />
    </div>
  )
}

export default Models