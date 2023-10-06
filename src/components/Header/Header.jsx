import React from "react";
import { useHistory, Link } from 'react-router-dom';

import styles from "./Header.module.scss";

import Button from "../Button/Button";
import Logo from "../../components/Logo/Logo";

const Header = ({setClicked}) => {
    
    return (
        <>
        <div className={styles.header}>
            <Logo />
            <div className={styles.navLinks}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/models">Vehicle Models</Link></li>
                    <li><Link to="/testionials">Testimonials</Link></li>
                    <li><Link to="/team">Our Team</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
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
