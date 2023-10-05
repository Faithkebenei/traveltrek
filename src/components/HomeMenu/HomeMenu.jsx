import React from "react";

import styles from "./HomeMenu.module.scss";

import Button from "../Button/Button";

import range from "../../images/range.png"

const HomeMenu = () => {
    return (
        <>
        <div className={styles.homeMenu}>
            <div className={styles.left}>
                <p>Explore the World on Wheels</p>
                <h2>More Than a Car, It's Your <span>Adventure</span></h2>
                <div className={styles.button}>
                    <div className={styles.leftButton}>
                        <Button color="#fff" backgroundColor="#FF4D30" border="2px solid #FF4D30" text="Rent Car" />
                    </div>
                    <div className={styles.rightButton}>
                        <Button color="#fff" backgroundColor="#1E1E1E" border="2px solid #1E1E1E" text="Learn More"  />
                    </div>    
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.imageContainer}>
                    <img src={range} alt="Range Rover" />
                </div>
            </div>
        </div>
        </>
    )
}

export default HomeMenu;
