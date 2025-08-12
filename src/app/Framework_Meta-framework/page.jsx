import React from 'react';
import Image from 'next/image';
import styles from './framework_metaframework.module.css';
import TitleContent from '../../components/titleContent';

export default function Framework_MetaFramework() {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <h1 className={styles.title}>Framework e Meta-framework</h1>
                <p className={styles.description}>
                    Conheça o poder dos frameworks e meta-frameworks que transformam o desenvolvimento web.
                </p>
            </div>
            <TitleContent icon="/images/icon_andarna.png" title="O que é um Framework?" />
            <div className={styles.line}></div>
            <div className={styles.info}>
                <p className={styles.textInfo}>
                    É um conjunto de códigos, ferramentas e boas práticas que ajuda a criar aplicativos de forma mais rápida.
                </p>
                <p className={styles.textInfo}>
                    Já vem com uma estrutura pronta (como um esqueleto) que o desenvolvedor pode adaptar.
                </p>
                <p className={styles.textInfo}>
                    Evita começar o projeto do zero.
                </p>
            </div>
        </div>
    )
} 