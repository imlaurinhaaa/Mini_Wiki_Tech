import React from "react";
import styles from '../../styles/CardsArquivos.module.css';

const CardsArquivos = ({ title, description, additionalInfo }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.additionalInfo}>{additionalInfo}</p>
        </div>
    )
}

export default CardsArquivos;