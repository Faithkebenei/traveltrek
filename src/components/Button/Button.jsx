import React from "react";

import styles from "./Button.module.scss";

const Button = ({backgroundColor, color, text, border, clicked, width}) => {
    const buttonStyles = {
        backgroundColor: backgroundColor,
        color: color,    
        border: border,
        width: width,   
    }
    return (
        <>
        <button style={buttonStyles} className={styles.button} onClick={clicked}>
            {text}
        </button>
        </>
    )
}

export default Button;