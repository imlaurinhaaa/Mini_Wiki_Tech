import styles from './Header.module.css';
import Image from 'next/image';

export default function Header({ title, subtitle }) {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image 
                src="/logo.png" 
                alt="Logo" 
                width={100} 
                height={100} 
                />
            </div>
            <div className={styles.texts}>
                <h1 className={styles.title}>{title}TESTE</h1>
                <h2 className={styles.subtitle}>{subtitle}teste</h2>
            </div>
        </header>
    );
}