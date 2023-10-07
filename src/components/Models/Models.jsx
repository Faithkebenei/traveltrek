import React from 'react'
import styles from "./Models.module.scss"

import Hero from '../Hero/Hero'
import FleetCard from '../FleetCard/FleetCard'
import CallSection from '../CallSection/CallSection'
import Footer from '../Footer/Footer'

import range from '../../images/range.png';
import peugeot from '../../images/peugeot.png';
import gle from '../../images/gle.png';
import santafe from '../../images/santafe.png';
import countryman from '../../images/countryman.png';
import cross from '../../images/cross.png';

const Models = () => {
  const fleet = [
    {index: 0, name: 'Range Rover Sport', image: range, was: '25,000', now: '20,000', model: 'Range Rover Sport', make: 'Land Rover', year: 2023, doors: '4/5', ac: 'Available', transmission: 'Automatic', fuel: 'Petrol'},
    {index: 1, name: 'Peugeot 3008', image: peugeot, was: '3,500', now: '3,000', model: 'Peugeot', make: '3008', year: 2019, doors: '4/5', ac: 'Available', transmission: 'Automatic', fuel: 'Petrol'},
    {index: 2, name: 'Mercedes-Benz GLE', image: gle, was: '10,000', now: '8,000', model: 'Mercedes-Benz', make: 'GLE', year: 2017, doors: '4/5', ac: 'Available', transmission: 'Automatic', fuel: 'Petrol'},
    {index: 3, name: 'Hyundai Santa Fe', image: santafe, was: '5,000', now: '4,000', model: 'Hyundai', make: 'Santa Fe', year: 2015, doors: '4/5', ac: 'Available', transmission: 'Automatic', fuel: 'Petrol'},
    {index: 4, name: 'Mini Countryman', image: countryman, was: '5,000', now: '4,000', model: 'Mini', make: 'Countryman', year: 2017, doors: '4/5', ac: 'Available', transmission: 'Automatic', fuel: 'Petrol'},
    {index: 5, name: 'Toyota Corolla Cross', image: cross, was: '3,500', now: '2,800', model: 'Toyota', make: 'Corolla', year: 2019, doors: '4/5', ac: 'Available', transmission: 'Automatic', fuel: 'Petrol'}
]
  return (
    <div className={styles.models}>
        <Hero text="Our Diverse Fleet" location="Home/Vehicle Models" />
          <div className={styles.headingSection}>
            <h3 className={styles.heading}>Explore Our Impressive Fleet</h3>
            <p className={styles.text}>At TravelTrek, we take pride in offering an extensive and meticulously maintained fleet of vehicles to cater to all your travel needs. Whether you're embarking on a weekend adventure, planning a family vacation, or require a vehicle for business purposes, we have the perfect solution for you.</p>
          </div>
          <div className={styles.fleets}>
            <div className={styles.fleet}>
            {fleet.map((item, index) => (
              <div className={styles.card}>
              <FleetCard image={item.image} name={item.name} price={item.now} make={item.make} transmission={item.transmission} doors={item.doors} fuel={item.fuel} key={index} />
              </div>
            ))}
            </div>
        </div>
          <CallSection />
          <Footer />
    </div>
  )
}

export default Models