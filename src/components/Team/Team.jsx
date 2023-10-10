import React from 'react'
import styles from './Team.module.scss'

import Hero from '../Hero/Hero'
import TeamCard from '../TeamCard/TeamCard'
import CallSection from '../CallSection/CallSection'
import Footer from '../Footer/Footer'

import julie from '../../images/julie.jpg'
import taylor from '../../images/taylor.jpg'
import alison from '../../images/alison.jpg'
import lavender from '../../images/lavender.jpg'
import stephen from '../../images/stephen.jpg'
import travis from '../../images/travis.jpg'

const Team = () => {
  const team = [
    {name: "Julie Kelce", image:julie, occupation:"Branch Manager"},
    {name: "Taylor Lautner", image:taylor, occupation:"Rental Agent"},
    {name: "Alison Swift", image:alison, occupation:"Fleet Manager"},
    {name: "Lavender Haze", image:lavender, occupation:"Marketing Coordinator"},
    {name: "Stephen Andreas", image:stephen, occupation:"Operations Supervisor"},
    {name: "Travis Rodrigo", image:travis, occupation:"IT Support"}
  ]
  return (
    <div className={styles.team}>
        <Hero text="Meet Our Amazing Experts" location="Home/Our Team" />
          <div className={styles.headingSection}>
            <h3 className={styles.heading}>Meet Our Team</h3>
            <p className={styles.text}>At TravelTrek, our success is driven by the dedication and expertise of our team. Get to know the faces behind the exceptional service</p>
          </div>
          <div className={styles.cardsContainer}>
           <div className={styles.cards}>
            {team.map((item, index)=> (
              <TeamCard key={index} image={item.image} name={item.name} occupation={item.occupation} />
            ))}
           </div>
          </div>
          <CallSection />
          <Footer />
    </div>
  )
}

export default Team