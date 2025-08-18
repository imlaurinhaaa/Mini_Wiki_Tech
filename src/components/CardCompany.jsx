import React from "react";
import styles from "../styles/CardCompany.module.css";
import Image from "next/image";

export default function CardCompany({ logo, title}) {
    return (
        <div className={styles.card}>
            <Image src={logo} alt={`${title} logo`} width={50} height={50} className={styles.logo} />
            <h2 className={styles.title}>{title}</h2>
        </div>
    )
}