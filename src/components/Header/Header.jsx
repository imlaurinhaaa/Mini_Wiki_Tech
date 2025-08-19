'use client';

import React, { useState } from 'react';   
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../../styles/Header.module.css';
import Image from 'next/image';

const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Arquivos Especiais', href: '/arquivos-especiais' },
    { name: 'Bibliotecas', href: '/Bibliotecas' },
    { name: 'Frameworks', href: '/Framework_Meta-framework' },
    { name: 'Next.js 15', href: '/Nextjs15' },
];

export default function Header({ title, subtitle }) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    return (
        <header className={styles.header}>
            <div className={styles.leftContainer}>
                <div className={styles.logo}>
                    <Image src="/icons/logo-asa.png" alt="Logo da empresa" width={100} height={100} priority />
                </div>
                <div className={styles.texts}>
                    <h1 className={styles.title}>{title || 'Teste'}</h1>
                    <h2 className={styles.subtitle}>{subtitle || 'Teste'}</h2>
                </div>
            </div>

            <button
                className={styles.menuButton}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Abrir menu"
            >
                {isMenuOpen ? '✕' : '☰'}
            </button>

            <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                <ul className={styles.navList}>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={isActive ? styles.activeLink : styles.navLink}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}