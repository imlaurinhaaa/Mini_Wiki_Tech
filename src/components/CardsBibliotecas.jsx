import React from "react";
import styles from "../styles/CardsBibliotecas.module.css"

const CardsBibliotecas = ({ name, description }) => (
    <div className={styles['card']}>
        <h3 className={styles['card-title']}>{name}</h3>
        {Array.isArray(description) ? (
            <ul className={styles['card-description']}>
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        ) : (
            <p className={styles['card-description']}>{description}</p>
        )}
    </div>
);

export default CardsBibliotecas;