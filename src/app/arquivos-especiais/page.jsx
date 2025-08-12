import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Image from "next/image";


export default function ArquivosEspeciais() {
    return (
        <div className={styles.container}>
           <div className={styles.banner}>
                <h1>Arquivos especiais do App Router e raiz do projeto</h1>
                <p>Venha conhecer mais sobre os arquivos especiais</p>
            </div>

            <div className={styles.titleContent}>
                <Image src="/images/dragao-feirge.png" alt="icone" width={50} height={50} />
                <h3 className={styles.title}>Diferença e função dos arquivos: error.js / global-error.js</h3>
            </div>
            <div className={styles.line}></div>
        </div>
    )
}