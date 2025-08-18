import React from "react";
import styles from "../styles/CardNextjs.module.css";
import Image from "next/image";

export default function CardNextjs({ logo, title, description }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.description}>{description}</div>
        </div>
            
    )
}
