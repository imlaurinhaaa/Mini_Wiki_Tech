import React from 'react';
import styles from '../../styles/Cards.module.css';

const Cards = ({ image, name, description  }) => (
    <div className={styles['product-card']}>
        {image ? (
            <img src={image} alt={name} className={styles['product-card-image']} />
        ) : null}
        <div className={styles['product-card-info']}>
            <h3 className={styles['product-card-name']}>{name}</h3>
            <p className={styles['product-card-description']}>{description}</p>
        </div>
    </div>
);

export default Cards;