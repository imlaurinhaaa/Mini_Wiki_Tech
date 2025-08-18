import React from 'react';
import styles from './nextjs.module.css';
import Header from '@/components/Header/Header';
import Image from 'next/image';
import CardNextjs from '@/components/CardNextjs';
import CardCompany from '@/components/CardCompany';

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
                    description={
                        <ul className={styles.topicList}>
                            <li><b>@next/codemod:</b> Ferramenta de linha de comando para atualizar projetos para as versões mais recentes do Next.js e React.</li>
                            <li><b>Indicador estático:</b> Novo indicador visual para mostrar rotas estáticas durante o desenvolvimento.</li>
                            <li><b>Suporte TypeScript em next.config.ts:</b> Agora é possível usar TypeScript para configurar o projeto, com autocompletar e verificação de tipo.</li>
                            <li><b>Suporte ao ESLint 9:</b> Adição de suporte à versão 9 do ESLint para garantir a qualidade e o padrão do código.</li>
                        </ul>
                    }
                />
                <CardNextjs
                    title="Recursos experimentais e de segurança:"
                    description={
                        <ul className={styles.topicList}>
                            <li><b>unstable_after:</b> Uma nova API que permite executar código após o streaming de uma resposta ter sido concluído.</li>
                            <li><b>Segurança aprimorada:</b> O Next.js 15 inclui melhorias de segurança nas Server Actions, com endpoints mais difíceis de adivinhar e remoção de ações não utilizadas.</li>
                        </ul>
                    }
                />
            </div>

            <div className={styles.contentTitle}>
                <Image src="/images/icon_tairn.png" alt="Dragão preto Tairn" width={100} height={100} className={styles.icon} />
                <h2 className={styles.subtitle}>Empresas que utilizam Next.js</h2>
                </div>
                <div className={styles.linha}></div>
                <div className={styles.block}>
                   
                    <CardCompany
                        logo="/images/nike.png"
                        title="Nike"
                    />
                    <CardCompany
                        logo="/images/openai.png"
                        title="OpenAI"
                    />
                    <CardCompany
                        logo="/images/spotify.png"
                        title="Spotify"
                    />
                    <CardCompany
                        logo="/images/LG.png"
                        title="LG"
                    />
                    <CardCompany
                        logo="/images/TheWashingtonPost.png"
                        title="The Washington Post"
                    />
                    <CardCompany
                        logo="/images/TikTok.png"
                        title="TikTok"
                    />
                    <CardCompany
                        logo="/images/hulu.png"
                        title="Hulu"
                    />
                    <CardCompany
                        logo="/images/hbomax.png"
                        title="HBO Max"
                    />
                    <CardCompany
                        logo="/images/vercel.png"
                        title="Vercel"
                    />
                    <CardCompany
                        logo="/images/expo.png"
                        title="Expo"
                    />
                    <CardCompany
                        logo="/images/nubank.png"
                        title="NuBank"
                    />
                    <CardCompany
                        logo="/images/ferrari.png"
                        title="Ferrari"
                    />
                </div>

                <div className={styles.contentTitle}>
                <Image src="/images/icon_tairn.png" alt="Dragão preto Tairn" width={100} height={100} className={styles.icon} />
                <h2 className={styles.subtitle}>Áreas de atuação e oportunidades</h2>
                </div>
                <div className={styles.linha}></div>
                <div className={styles.block}>
                    <p className={styles.info}>O Next.js 15 foi projetado para impulsionar o desenvolvimento web moderno. As principais áreas de atuação e oportunidades para desenvolvedores que dominam este framework são:</p>
                    <div className={styles.listInfo}>
                    <ul className={styles.topicList}>
                        <li><b>Desenvolvimento de Single Page Applications (SPAs):</b> Construção de aplicativos que carregam todo o conteúdo de uma vez e atualizam a página de forma dinâmica, sem a necessidade de recarregar.</li>
                        <li><b>Websites com renderização no servidor (SSR):</b> Criação de sites que geram o HTML no servidor a cada solicitação, melhorando o desempenho e o SEO.</li>
                        <li><b>Geração de sites estáticos (SSG):</b> Criação de sites que geram o HTML e outros arquivos estáticos durante a etapa de build, resultando em desempenho extremamente rápido.</li>
                        <li><b>Desenvolvimento de APIs:</b> Construção de APIs eficientes e escaláveis para alimentar tanto o front-end quanto outros serviços.</li>
                    </ul>
                    </div>
                </div>
                </div>
    )
}
