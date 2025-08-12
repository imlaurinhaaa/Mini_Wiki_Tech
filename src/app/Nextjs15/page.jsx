import React from 'react';
import styles from './nextjs.module.css';
import Header from '@/components/Header/Header';
import Image from 'next/image';
import CardNextjs from '@/components/CardNextjs';

export default function Nextjs15() {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <h1 className={styles.title}>Next.js 15</h1>
                <p className={styles.description}>Pontos fortes, novidades, curiosidades, empresas que utilizam e áreas de atuação.</p>
            </div>
            <div className={styles.contentTitle}>
                <Image src="/images/icon_tairn.png" alt="Dragão preto Tairn" width={100} height={100} className={styles.icon} />
                <h2 className={styles.subtitle}>O que é o Next.js 15</h2>
                </div>
                <div className={styles.linha}></div>
                <div className={styles.textBlock}>
                    <p className={styles.info}>O Next.js 15 é a mais recente atualização do popular framework de desenvolvimento web. O lançamento incorpora contribuições de mais de 3.000 desenvolvedores, incluindo parceiros como Google e Meta, e se baseia nas versões de pré-lançamento RC1 e RC2. O principal objetivo é capacitar os desenvolvedores a construir aplicativos web modernos e de alto desempenho de forma mais eficiente.</p>
                </div>

                <div className={styles.contentTitle}>
                <Image src="/images/icon_tairn.png" alt="Dragão preto Tairn" width={100} height={100} className={styles.icon} />
                <h2 className={styles.subtitle}>Principais recursos e atualizações</h2>
                </div>
                <div className={styles.linha}></div>
                <div className={styles.block}>
                <CardNextjs 
                    title="Renderização de Imagens Avançada"
                    description="O Next.js 15 introduz melhorias significativas na renderização de imagens, permitindo que os desenvolvedores otimizem o carregamento e a exibição de imagens em seus aplicativos, resultando em uma experiência de usuário mais rápida e fluida."/>
                <CardNextjs
                    title="APIs assíncronas e cache:"
                    description="Uma das mudanças mais significativas é a introdução das APIs de solicitação assíncrona, que representam um passo em direção a um modelo simplificado de renderização e cache. No entanto, houve uma mudança drástica na semântica de cache, e agora as solicitações fetch, manipuladores de rotas GET e navegações do lado do cliente não são mais armazenadas em cache por padrão."/>    
                <CardNextjs
                    title="Turbopack Dev (Estável):"
                    description="O motor de desenvolvimento Turbopack agora está estável, trazendo melhorias significativas de desempenho e estabilidade para o ambiente de desenvolvimento."/>
                <CardNextjs
                    title="Ferramentas para desenvolvedores:"
                    description="TEXTOTEXTOTEXTO"/>    
        </div>
        </div>
    )
}
