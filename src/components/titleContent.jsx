import React from 'react';
import Image from 'next/image';
import styles from '../styles/titleContent.module.css';

export default function TitleContent({ icon, title }) {
    return (
        <div className={styles.titleContent}>
            <Image src={icon} alt="icone" width={50} height={50} />
            <h1 className={styles.title}>{title}</h1>
        </div>
    );
}