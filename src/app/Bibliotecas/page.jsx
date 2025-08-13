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

            {/* Módulo 01 */}
            <div className={styles.modulo}>
                <div className={styles.titleContainer}>
                    <img src="/images/iconsgayel.png" alt="Módulo 01" className={styles.image} />
                    <h2 className={styles.subtitle}>O que são bibliotecas de estilos?</h2>
                </div>

                <div className={styles.line}></div>

                <div className={styles.cardsContainer}>
                    <p className={styles.cardsdes}>Bibliotecas de estilos são conjuntos de ferramentas que facilitam a criação e aplicação de estilos visuais (como cores, tamanhos, espaçamentos e fontes) em páginas e componentes da sua aplicação web, sem a necessidade de escrever todo o CSS manualmente.</p>
                    
                    <CardsBibliotecas
                        name=" Por que usar uma biblioteca de estilos?"
                        description={[
                            "✔️ Produtividade;",
                            "✔️ Padronização;",
                            "✔️ Customização fácil;",
                            "✔️ Reutilização;",
                            "✔️ Menos bugs."
                        ]}
                    />
                    <CardsBibliotecas
                        name=" Exemplos populares de bibliotecas de estilos:"
                        description={[
                            "✔️ CSS Modules;",
                            "✔️ Tailwind CSS;",
                            "✔️ Material-UI;",
                            "✔️ Styled Components;",
                            "✔️ Emotion."
                        ]}
                    /> 
                </div>
            </div>

            {/* Módulo 02 */}
            <div className={styles.modulo}>
                <div className={styles.titleContainer}>
                    <img src="/images/iconsgayel.png" alt="Módulo 01" className={styles.image} />
                    <h2 className={styles.subtitle}>O que é CSS Modules?</h2>
                </div>

                <div className={styles.line}></div>

                <div className={styles.cardsContainer}>
                    <p className={styles.cardsdes}>CSS Modules é como dar a cada componente seu próprio “guarda-roupa” de estilos exclusivos, onde as roupas (classes) não são compartilhadas por acidente com outros componentes.</p>

                    <CardsBibliotecas
                        name="Como funciona:"
                        description={[
                            "O CSS Modules é uma técnica e um formato de arquivo (normalmente *.module.css) que permite que o CSS seja aplicado somente ao componente onde foi importado, sem “vazar” para outros elementos da aplicação.",
                        ]}
                    />
                    <CardsBibliotecas
                        name="Prós:"
                        description={[
                            "✔️ Isolamento de estilos;",
                            "✔️ Evita conflitos de nomes;",
                            "✔️ Facilita a manutenção;",
                            "✔️ Suporte a pré-processadores."
                        ]}
                    /> 
                    <CardsBibliotecas
                        name="Contras:"
                        description={[
                            "❌ Import obrigatório;",
                            "❌ Configuração inicial;",
                            "❌ Sintaxe mais verbosa;",
                            "❌ Desvantajoso em grandes projetos."
                        ]}
                    />
                    <CardsBibliotecas
                        name="Empresas/Projetos:"
                        description={[
                            "Muito utilizado em projetos Next.js devido à sua simplicidade e performance.",
                        ]}
                    />
                </div>
            </div>

            {/* Módulo 03*/}
            <div className={styles.modulo}>
                <div className={styles.titleContainer}>
                    <img src="/images/iconsgayel.png" alt="Módulo 01" className={styles.image} />
                    <h2 className={styles.subtitle}>O que é Styled Components?</h2>
                </div>

                <div className={styles.line}></div>

                <div className={styles.cardsContainer}>
                    <p className={styles.cardsdes}>Styled-components é uma biblioteca de CSS-in-JS que permite escrever estilos diretamente dentro do código JavaScript/TypeScript, vinculados a componentes.</p>

                    <CardsBibliotecas
                        name="Como funciona:"
                        description={[
                            "Permite escrever CSS diretamente em componentes JavaScript, utilizando templates strings. Os estilos são encapsulados no componente e podem ser dinâmicos.",
                        ]}
                    />
                    <CardsBibliotecas
                        name="Prós:"
                        description={[
                            "✔️ Alta flexibilidade;",
                            "✔️ Permite estilos dinâmicos;",
                            "✔️ Fácil de usar em componentes complexos;",
                            "✔️ Reutilização fácil.",
                        ]}
                    /> 
                    <CardsBibliotecas
                        name="Contras:"
                        description={[
                            "❌ Performance em runtime;",
                            "❌ Dependência de biblioteca;",
                            "❌ Bundle maior;",
                            "❌ Difícil de migrar."
                        ]}
                    />
                    <CardsBibliotecas
                        name="Empresas/Projetos:"
                        description={[
                            "Utilizado em projetos que exigem muita customização e estilos dinâmicos, como plataformas de e-commerce e interfaces de usuário mais elaboradas.",
                        ]}
                    />
                </div>
            </div>

            {/* Módulo 04*/}
            <div className={styles.modulo}>
                <div className={styles.titleContainer}>
                    <img src="/images/iconsgayel.png" alt="Módulo 01" className={styles.image} />
                    <h2 className={styles.subtitle}>O que é Emotion?</h2>
                </div>

                <div className={styles.line}></div>

                <div className={styles.cardsContainer}>
                    <p className={styles.cardsdes}>Emotion é uma biblioteca de CSS-in-JS (assim como Styled-components) que permite escrever estilos diretamente no JavaScript/TypeScript, mas com mais flexibilidade e opções de uso.</p>

                    <CardsBibliotecas
                        name="Como funciona:"
                        description={[
                            "No Next.js, o Emotion funciona igual no React, mas com SSR configurado para extrair os estilos no servidor, garantindo que a página já chegue estilizada no navegador.",
                        ]}
                    />
                    <CardsBibliotecas
                        name="Prós:"
                        description={[
                            "✔️ Suporte completo a SSR;",
                            "✔️ Estilos dinâmicos e condicionais;",
                            "✔️ Flexibilidade;",
                            "✔️ Integração fácil com Next.js.",
                        ]}
                    /> 
                    <CardsBibliotecas
                        name="Contras:"
                        description={[
                            "❌ Configuração inicial mais complexa;",
                            "❌ Mais dependência de bibliotecas externas;",
                            "❌ Possível incompatibilidade com outras soluções CSS."
                        ]}
                    />
                    <CardsBibliotecas
                        name="Empresas/Projetos:"
                        description={[
                            "Utilizado em projetos que priorizam performance e flexibilidade, como aplicativos web de alta performance.",
                        ]}
                    />
                </div>
            </div>

            {/* Módulo 05*/}
            <div className={styles.modulo}>
                <div className={styles.titleContainer}>
                    <img src="/images/iconsgayel.png" alt="Módulo 01" className={styles.image} />
                    <h2 className={styles.subtitle}>O que é Tailwind CSS?</h2>
                </div>

                <div className={styles.line}></div>

                <div className={styles.cardsContainer}>
                    <p className={styles.cardsdes}>Tailwind CSS é um framework CSS utilitário, que oferece uma série de classes prontas para você aplicar estilos direto no HTML ou JSX, sem precisar escrever CSS personalizado.</p>

                    <CardsBibliotecas
                        name="Como funciona:"
                        description={[
                            "Tailwind CSS funciona oferecendo um conjunto grande de classes utilitárias CSS prontas para você usar diretamente no HTML ou JSX, em vez de escrever CSS personalizado. Você monta o visual do seu site combinando essas classes pequenas e específicas — como bg-blue-500 (cor de fundo azul), p-4 (padding), text-white (cor do texto branca) — aplicando várias delas em elementos para criar o estilo desejado."
                        ]}
                    />
                    <CardsBibliotecas
                        name="Prós:"
                        description={[
                            "✔️ Desenvolvimento rápido;",
                            "✔️ Classes utilitárias;",
                            "✔️ Menos CSS customizado;",
                            "✔️ Performance.",
                        ]}
                    /> 
                    <CardsBibliotecas
                        name="Contras:"
                        description={[
                            "❌ Estilos repetitivos;",
                            "❌ Não é CSS tradicional;",
                            "❌ Personalização complexa."
                        ]}
                    />
                    <CardsBibliotecas
                        name="Empresas/Projetos:"
                        description={[
                            "Muito popular em projetos que precisam de design responsivo e consistente, como sites de landing pages e aplicativos web com foco em interfaces de usuário modernas.",
                        ]}
                    />
                </div>
            </div>

            {/* Módulo 06*/}
            <div className={styles.modulo}>
                <div className={styles.titleContainer}>
                    <img src="/images/iconsgayel.png" alt="Módulo 01" className={styles.image} />
                    <h2 className={styles.subtitle}>O que é Material UI?</h2>
                </div>

                <div className={styles.line}></div>

                <div className={styles.cardsContainer}>
                    <p className={styles.cardsdes}>Material UI (MUI) é uma biblioteca de componentes React que implementa o Material Design, o sistema de design criado pelo Google.</p>
                    <CardsBibliotecas
                        name="Como funciona:"
                        description={[
                            "Você importa componentes React prontos (botões, cards, menus, etc) que já vêm com estilos baseados no Material Design. Pode usar e customizar via props e tema global para criar uma interface consistente, responsiva e acessível sem precisar escrever CSS do zero."
                        ]}
                    />
                    <CardsBibliotecas
                        name="Prós:"
                        description={[
                            "✔️ Componentes prontos e ricos em funcionalidades;",
                            "✔️ Design moderno e consistente (Material Design);",
                            "✔️ Fácil personalização via tema;",
                            "✔️ Ótima documentação e comunidade grande.",
                        ]}
                    /> 
                    <CardsBibliotecas
                        name="Contras:"
                        description={[
                            "❌ Pode aumentar o tamanho do bundle (biblioteca grande);",
                            "❌ Menos flexível para estilos muito personalizados fora do tema;",
                            "❌ Depende do Emotion para estilização (mais uma dependência)."
                        ]}
                    />
                    <CardsBibliotecas
                        name="Empresas/Projetos:"
                        description={[
                            "Ideal para projetos que buscam um design consistente e que já utilizam o Material Design, como aplicativos web de produtividade e ferramentas corporativas.",
                        ]}
                    />
                </div>
            </div>

        </div>
    );
}