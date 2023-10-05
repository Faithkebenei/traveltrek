import React from "react";

import styles from "./Header.module.scss";

import Button from "../Button/Button";

import { FaCarSide } from "react-icons/fa";


const Header = () => {
    return (
        <>
        <div className={styles.header}>
            <div className={styles.logo}>
                <FaCarSide size="4rem" color="#FF4D30"/>
                <p><span>TravelTrek</span> Rentals</p>
            </div>
            <div className={styles.navLinks}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Vehicle Models</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">Our Team</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className={styles.button}>
                <Button color="#1E1E1E" text="Login" backgroundColor="transparent" border="2px solid #FF4D30"/>
                <Button color="#fff" backgroundColor="#FF4D30" border="2px solid #FF4D30" text="Sign Up"/>
            </div>
        </div>
        </>
    )
}

export default Header;
