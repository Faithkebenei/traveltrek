import React from 'react'
import styles from './RentSteps.module.scss';

import Card from '../Card/Card'

import { FaCheckToSlot, FaCar, FaHeartCircleCheck } from "react-icons/fa6";

const RentSteps = () => {
  return (
    <div className={styles.rentSteps}>
        <h3 className={styles.heading}>Rent a <span>Car</span> in 3 Easy Steps</h3>
        <div className={styles.cards}>
            <Card icon={<FaCheckToSlot color='#fff' size='2rem'/>} heading='Select A Car' description='Select from our diverse fleet to match your needs for getaways or memorable journeys.' />
            <Card icon={<FaHeartCircleCheck color='#fff' size='2rem'/>} heading='Secure Your Reservation' description='Effortlessly secure your chosen vehicle online or by phone, with flexible scheduling options.' />
            <Card icon={<FaCar color='#fff' size='2rem'/>} heading='Begin Your Journey' description='After confirmation, visit our convenient location, pick up your rental, and savor a hassle-free drive.' />
        </div>
    </div>
  )
}

export default RentSteps