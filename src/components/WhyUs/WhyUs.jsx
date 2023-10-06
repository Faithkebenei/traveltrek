import React from 'react'
import styles from './WhyUs.module.scss'
import Card from '../Card/Card'

import {FaCarTunnel,FaUserCheck,FaMoneyBills,FaCalendarCheck,FaBusinessTime, FaWeightScale} from "react-icons/fa6";

const WhyUs = () => {
  return (
    <div className={styles.whyUs}>
        <div className={styles.headingText}>
            <h3 className={styles.heading}>Why Choose Us?</h3>
        </div>
        <div className={styles.cards}>
        <Card icon={<FaCarTunnel color='#fff' size='2rem'/>} heading='Diverse Fleet' description="Our extensive selection of cars, vans, and SUVs ensures you'll find the ideal vehicle for any trip" />
        <Card icon={<FaUserCheck color='#fff' size='2rem'/>} heading='User-Friendly Booking' description="Our seamless online booking platform makes reserving a vehicle quick and easy" />
        <Card icon={<FaMoneyBills color='#fff' size='2rem'/>} heading='Transparent Pricing' description="No hidden fees. We offer competitive and transparent pricing, so you know exactly what to expect" />
        <Card icon={<FaCalendarCheck color='#fff' size='2rem'/>} heading='Exceptional Service' description="Our dedicated team is committed to providing top-notch customer service, ensuring a smooth and enjoyable rental experience" />
        <Card icon={<FaWeightScale color='#fff' size='2rem'/>} heading='Quality Assurance' description="Our well-maintained vehicles are reliable, clean, and in excellent condition" />
        <Card icon={<FaBusinessTime color='#fff' size='2rem'/>} heading='Convenience' description="Convenient locations and hassle-free pick-up and drop-off make your journey stress-free" />
        </div>
    </div>
  )
}

export default WhyUs