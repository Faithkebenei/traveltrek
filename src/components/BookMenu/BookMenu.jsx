import React from "react";

import styles from "./BookMenu.module.scss";
import { FaCarSide } from "react-icons/fa";
import { FaLocationDot, FaCalendarDays } from "react-icons/fa6";
import Button from "../Button/Button";

const BookMenu = () => {
    return (
        <>
        <div className={styles.BookMenu}>
            <div className={styles.contentContainer}>
                <div className={styles.contentContainerOpacity}>
                    <div className={styles.heading}>
                        <p>Book a Car</p>
                    </div>
                    <div className={styles.componentTopRow}>
                        <div className={styles.component}>
                            <div className={styles.label}>
                            <FaCarSide color="#FF4D30" size="1rem" />
                            <label for="">Select Your Car Type</label>
                            </div>  
                            <select name="" id="">
                                <option selected disabled>--Select--</option>
                                <option value="1">Range Rover Sport</option>
                                <option value="2">Peugeot 3008</option>
                                <option value="3">Mercedes-Benz GLE</option>
                                <option value="4">Hyundai Santa Fe</option>
                                <option value="5">Mini Countryman</option>
                                <option value="6">Toyota Corolla Cross</option>
                            </select>
                        </div>

                        <div className={styles.component}>
                            <div className={styles.label}>
                            <FaLocationDot color="#FF4D30" size="1rem" />
                            <label for="">Pick-up</label>
                            </div>  
                            <select name="" id="">
                                <option selected disabled>--Select--</option>
                                <option value="1">Nairobi</option>
                                <option value="2">Eldoret</option>
                                <option value="3">Mombasa</option>
                                <option value="4">Kisumu</option>
                            </select>
                        </div>

                        <div className={styles.component}>
                            <div className={styles.label}>
                            <FaLocationDot color="#FF4D30" size="1rem" />
                            <label for="">Drop-off</label>
                            </div>  
                            <select name="" id="">
                                <option selected disabled>--Select--</option>
                                <option value="1">Nairobi</option>
                                <option value="2">Eldoret</option>
                                <option value="3">Mombasa</option>
                                <option value="4">Kisumu</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.componentBottomRow}>
                        <div className={styles.component}>
                            <div className={styles.label}>
                            <FaCalendarDays color="#FF4D30" size="1rem" />
                            <label for="">Pick-up</label>
                            </div>  
                            <input type="date" />
                        </div>

                        <div className={styles.component}>
                            <div className={styles.label}>
                            <FaCalendarDays color="#FF4D30" size="1rem" />
                            <label for="">Drop-off</label>
                            </div>  
                            <input type="date" />
                        </div>

                        <div className={styles.component}>
                        <div className={styles.label} style={{visibility: 'hidden'}}>
                            <FaCalendarDays color="#FF4D30" size="1rem" />
                            <label for="">Pick-up</label>
                            </div>  
                            <Button text="Search" color="#fff" backgroundColor="#FF4D30" border="2px solid #FF4D30" width="100%" borderRadius="8px" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default BookMenu;