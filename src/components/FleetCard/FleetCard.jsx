import React from 'react'
import styles from './FleetCard.module.scss'

import range from '../../images/range.png';
import peugeot from '../../images/peugeot.png';
import gle from '../../images/gle.png';
import santafe from '../../images/santafe.png';
import countryman from '../../images/countryman.png';
import cross from '../../images/cross.png';

import Button from '../Button/Button';

const FleetCard = ({image, name, price, make, transmission, doors, fuel}) => {
  return (
    <div className={styles.card}>
        <div className={styles.image}>
            <img src={image} alt="" />
        </div>
        <div className={styles.basicInfo}>
            <div className={styles.topWrapper}>
            <div className={styles.name}>
                <p>{name}</p>
            </div>
            <div className={styles.price}>
                <p>Ksh {price}</p>
            </div>
            </div>
            <div className={styles.star}>
                <span className={styles.icon}>
                    <svg height="21px" version="1.1" 
                     viewBox="0 0 20 21" 
                        width="20px" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M10,15.273 L16.18,19 L14.545,11.971 L20,7.244 L12.809,6.627 L10,0 L7.191,6.627 L0,7.244 L5.455,11.971 L3.82,19 L10,15.273 Z"/></svg>
                </span>
                <span className={styles.icon}>
                    <svg height="21px" version="1.1" 
                     viewBox="0 0 20 21" 
                        width="20px" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M10,15.273 L16.18,19 L14.545,11.971 L20,7.244 L12.809,6.627 L10,0 L7.191,6.627 L0,7.244 L5.455,11.971 L3.82,19 L10,15.273 Z"/></svg>
                </span>
                <span className={styles.icon}>
                    <svg height="21px" version="1.1" 
                     viewBox="0 0 20 21" 
                        width="20px" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M10,15.273 L16.18,19 L14.545,11.971 L20,7.244 L12.809,6.627 L10,0 L7.191,6.627 L0,7.244 L5.455,11.971 L3.82,19 L10,15.273 Z"/></svg>
                </span>
                <span className={styles.icon}>
                    <svg height="21px" version="1.1" 
                     viewBox="0 0 20 21" 
                        width="20px" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M10,15.273 L16.18,19 L14.545,11.971 L20,7.244 L12.809,6.627 L10,0 L7.191,6.627 L0,7.244 L5.455,11.971 L3.82,19 L10,15.273 Z"/></svg>
                </span>
                <span className={styles.icon}>
                    <svg height="21px" version="1.1" 
                     viewBox="0 0 20 21" 
                        width="20px" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M10,15.273 L16.18,19 L14.545,11.971 L20,7.244 L12.809,6.627 L10,0 L7.191,6.627 L0,7.244 L5.455,11.971 L3.82,19 L10,15.273 Z"/></svg>
                </span>
            </div>
            <div className={styles.infoWrapper}>
            <div className={styles.leftInfo}>
                <p>{make}</p>
                <p>{transmission}</p>
            </div>
            <div className={styles.rightInfo}>
                <p>{doors}</p>
                <p>{fuel}</p>
            </div>
            </div>
        </div>
        <Button backgroundColor='#FF4D30' color='#fff' text='Reserve' width='16rem' border="none" borderRadius="" />
    </div>
  )
}

export default FleetCard