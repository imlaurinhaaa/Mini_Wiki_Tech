'use client';
import React from 'react';
import styles from './page.module.css';
import CardsBibliotecas from '../../components/CardsBibliotecas';

export default function Bibliotecas() {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <h1 className={styles.title}>Bibliotecas de Estilos</h1>
                <p className={styles.bannerDescription}>Explore a variedade de estilos e bibliotecas.</p>
            </div>

            <div className={styles.modulo}>
                <div className={styles.titleContainer}>
                    <img src="/images/iconsgayel.png" alt="Módulo 01" className={styles.image} />
                    <h2 className={styles.subtitle}>O que são bibliotecas de estilos?</h2>
                </div>

                <div className={styles.line}></div>

                <div className={styles.cardsContainer}>
                    <p className={styles.cardsdes}>Bibliotecas de estilos são ferramentas ou conjuntos de recursos que ajudam você a criar e aplicar estilos visuais (cores, tamanhos, espaçamentos, fontes, etc.) a páginas e componentes da sua aplicação web, sem precisar escrever todo o CSS do zero.</p>
                    
                    <CardsBibliotecas
                        name=" Por que usar uma biblioteca de estilos?"
                        description={[
                            "Produtividade",
                            "Padronização",
                            "Customização fácil",
                            "Reutilização",
                            "Menos bugs"
                        ]}
                    />
                    <CardsBibliotecas
                        name=" Exemplos populares de bibliotecas de estilos"
                        description={[
                            "CSS Modules",
                            "Tailwind CSS",
                            "Material-UI",
                            "Styled Components",
                            "Emotion"
                        ]}
                    /> 
                </div>
            </div>

        </div>
    );
}