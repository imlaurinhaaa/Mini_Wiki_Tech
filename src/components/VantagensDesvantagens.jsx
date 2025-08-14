import React from "react";
import styles from "../styles/VantagensDesvantagens.module.css";

export default function VantagensDesvantagens({ vantagens, desvantagens }) {
    return (
        <div className={styles.vantagensDesvantagens}>
            <div className={styles.vInfo}>
                <h3>Vantagens</h3>
                <ul>
                    {vantagens?.map((vantagem, index) => (
                        <li key={index}>
                            <strong>{vantagem.titulo}</strong> – {vantagem.descricao}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.dInfo}>
                <h3>Desvantagens</h3>
                <ul>
                    {desvantagens?.map((desvantagem, index) => (
                        <li key={index}>
                            <strong>{desvantagem.titulo}</strong> – {desvantagem.descricao}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
