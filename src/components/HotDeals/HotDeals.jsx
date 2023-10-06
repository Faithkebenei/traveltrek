import React, { useState } from 'react'
import styles from './HotDeals.module.scss';

import Button from "../Button/Button";

import range from '../../images/range.png';
import peugeot from '../../images/peugeot.png';
import gle from '../../images/gle.png';
import santafe from '../../images/santafe.png';
import countryman from '../../images/countryman.png';
import cross from '../../images/cross.png';

const HotDeals = () => {
    const [selectedCar, setSelectedCar] = useState(0)
    console.log(selectedCar);
    const hotDeals = [
        {index: 0, name: 'Range Rover Sport', image: range, was: '25,000', now: '20,000', model: 'Range Rover Sport', make: 'Land Rover', year: 2023, doors: 4, ac: 'Available', transmission: 'Automatic', fuel: 'Petrol'},
        {index: 1, name: 'Peugeot 3008', image: peugeot, was: '3,500', now: '3,000', model: 'Peugeot', make: '3008', year: 2019, doors: 4, ac: 'Available', transmission: 'Automatic', fuel: 'Petrol'},
        {index: 2, name: 'Mercedes-Benz GLE', image: gle, was: '10,000', now: '8,000', model: 'Mercedes-Benz', make: 'GLE', year: 2017, doors: 4, ac: 'Available', transmission: 'Automatic', fuel: 'Petrol'},
        {index: 3, name: 'Hyundai Santa Fe', image: santafe, was: '5,000', now: '4,000', model: 'Hyundai', make: 'Santa Fe', year: 2015, doors: 4, ac: 'Available', transmission: 'Automatic', fuel: 'Petrol'},
        {index: 4, name: 'Mini Countryman', image: countryman, was: '5,000', now: '4,000', model: 'Mini', make: 'Countryman', year: 2017, doors: 4, ac: 'Available', transmission: 'Automatic', fuel: 'Petrol'},
        {index: 5, name: 'Toyota Corolla Cross', image: cross, was: '3,500', now: '2,800', model: 'Toyota', make: 'Corolla', year: 2019, doors: 4, ac: 'Available', transmission: 'Automatic', fuel: 'Petrol'}
    ]
  return (
    <div className={styles.hotDeals}>
        <div className={styles.headingText}>
            <h3 className={styles.heading}>Today’s Hot Deals</h3>
            <p>Embark on your journey with us. Select from our array of vehicles and enjoy a hassle-free experience from reservation to return.</p>
        </div>
        <div className={styles.bodyText}>
            <div className={styles.carName}>
                {hotDeals.map((item, index) => (
                    <div style={{color: selectedCar === index ? '#fff' : '#1E1E1E', backgroundColor: selectedCar === index ? '#FF4D30' : ''}} onClick={(() => setSelectedCar(index))} key={index}>{item.name}</div>
                ))}
            </div>
            <div className={styles.imageContainer}>
                <img src={hotDeals[selectedCar].image} alt= {hotDeals[selectedCar].name}/>
            </div>
            <div className={styles.table}>
                <table className="table-bordered" >
                    <thead>
                        <tr>
                            <th>Was <br></br> Ksh <span>{hotDeals[selectedCar].was}</span></th>
                            <th>Now <br></br> Ksh {hotDeals[selectedCar].now}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Model</td>
                            <td>{hotDeals[selectedCar].model}</td>
                        </tr>

                        <tr>
                            <td>Make</td>
                            <td>{hotDeals[selectedCar].make}</td>
                        </tr>

                        <tr>
                            <td>Year</td>
                            <td>{hotDeals[selectedCar].year}</td>
                        </tr>

                        <tr>
                            <td>Doors</td>
                            <td>{hotDeals[selectedCar].doors}</td>
                        </tr>

                        <tr>
                            <td>AC</td>
                            <td>{hotDeals[selectedCar].ac}</td>
                        </tr>

                        <tr>
                            <td>Transmission</td>
                            <td>{hotDeals[selectedCar].transmission}</td>
                        </tr>

                        <tr>
                            <td>Fuel</td>
                            <td>{hotDeals[selectedCar].fuel}</td>
                        </tr>
                    </tbody>
                </table>
                <Button text="Reserve Now" color="#fff" backgroundColor="#FF4D30" border="2px solid #FF4D30" width="100%"/>
            </div>
        </div>
    </div>
  )
}

export default HotDeals