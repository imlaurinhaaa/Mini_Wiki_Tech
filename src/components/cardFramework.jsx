import React from "react";
import styles from '../styles/cardFramework.module.css'

export default function CardFramework({ title, description }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    );
}