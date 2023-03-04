import React, { useState } from 'react'
import styles from "../style/greetings.module.css"

/**
 * 
 * @param {string} message this is will be return to the screens and if
 * the default of  the param is @argument {string} "Hello There"
 * the width of the display will be same as long your text is so i really
 * recommend you just write 2 or 1 word it's a good size of this
 * @param {number} duration how long you want to show the text in miliseconds
 */

export default function Greetings({ message, duration }) {
    const [animationPlay, setAnimationPlay] = useState(true);

    const changeAnimation = setTimeout(() => {
        setAnimationPlay(false);
        clearTimeout(changeAnimation);
    }, duration ? duration : 3500);

    return (
        <div className={styles.container}>
            <div className={`notSelected ${styles.textContainer} ${animationPlay ? styles.open : styles.close}`}>
                <span className={`notSelected ${styles.rectangleText} ${animationPlay ? styles.open : styles.close}`}>
                    {message ? message : "Hello There!"}
                </span>
            </div>
        </div>
    )
}
