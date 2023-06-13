import React from 'react'
import styles from "../style/Loading.module.css"

/**
 * 
 * @param {Element}  
 * Element it simply the to check what is we waiting so if it's loaded it will detect it and then
 * the element is gone or dissappear or else 
 */
function Loading({ ElementComplete = false }) {
    
    return (
        <div className={styles.main}
            style={{
                display: ElementComplete ? "none" : "block"
            }}
        >
            <span className={`${styles.word} ${styles.l}`}>
                L
            </span>
            <span className={`${styles.word} ${styles.o}`}>
                O
            </span>
            <span className={`${styles.word} ${styles.a}`}>
                A
            </span>
            <span className={`${styles.word} ${styles.d}`}>
                D
            </span>
            <span className={`${styles.word} ${styles.i}`}>
                I
            </span>
            <span className={`${styles.word} ${styles.n}`}>
                N
            </span>
            <span className={`${styles.word} ${styles.g}`}>
                G
            </span>
        </div>
    )
}

export default Loading