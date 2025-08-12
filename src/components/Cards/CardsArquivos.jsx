import React from "react";
import styles from '../../styles/titleContent.module.css';

const CardsArquivos = ({ title, description }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default CardsArquivos;
