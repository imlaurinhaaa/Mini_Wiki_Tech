import React from 'react';
import styles from './framework_metaframework.module.css';
import TitleContent from '../../components/titleContent';
import CardFramework from '../../components/cardFramework';
import ExampleImgs from '../../components/ExampleImgs';
import VantagensDesvantagens from '../../components/VantagensDesvantagens';

export default function Framework_MetaFramework() {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <h1 className={styles.title}>Framework e Meta-framework</h1>
                <p className={styles.description}>
                    Explore frameworks e meta-frameworks que transformam o desenvolvimento web.
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
            <TitleContent icon="/images/icon_andarna.png" title="Tipos de framework" />
            <div className={styles.line}></div>
            <div className={styles.cards}>
                <CardFramework title="Front-end" description="Parte visual (ex: React, Vue.js, Angular)." />
                <CardFramework title="Back-end" description="Parte do servidor (ex: Express.js, Django)." />
                <CardFramework title="Full-stack" description="Junta front-end e back-end (ex: Meteor, Next.js)." />
            </div>
            <TitleContent icon="/images/icon_andarna.png" title="O que é um Meta-framework?" />
            <div className={styles.line}></div>
            <div className={styles.info}>
                <p className={styles.textInfo}>
                    É uma camada extra que usa um framework como base.
                </p>
                <p className={styles.textInfo}>
                    Traz mais funcionalidades e facilita ainda mais o desenvolvimento de aplicativos complexos.
                </p>
                <p className={styles.textInfo}>
                    <b>Exemplos</b>
                </p>
                <ExampleImgs />
            </div>
            <TitleContent icon="/images/icon_andarna.png" title="Vantagens e Desvantagens de usar Frameworks" />
            <div className={styles.line}></div>
            <div className={styles.info}>
                <VantagensDesvantagens
                    vantagens={[
                        { titulo: "Aumenta a produtividade", descricao: "Oferece ferramentas e bibliotecas prontas, reduzindo o tempo de desenvolvimento." },
                        { titulo: "Usa boas práticas", descricao: "Padroniza a arquitetura e organização do código, seguindo princípios como MVC ou Clean Architecture." },
                        { titulo: "Facilita a manutenção", descricao: "Estrutura clara e modular facilita encontrar e corrigir erros." },
                        { titulo: "Reutiliza código", descricao: "Módulos e componentes podem ser reaproveitados em diferentes projetos." },
                        { titulo: "Tem boa segurança", descricao: "Inclui mecanismos contra ataques comuns (XSS, SQL Injection, CSRF)." },
                        { titulo: "Comunidades grandes", descricao: "Muitos tutoriais, documentação e fóruns disponíveis, além de bibliotecas complementares." },
                        { titulo: "Evolução constante", descricao: "Recebe atualizações que melhoram performance e funcionalidades." },
                    ]}
                    desvantagens={[
                        { titulo: "Pode ser difícil aprender", descricao: "Algumas arquiteturas e padrões podem ter curva de aprendizado alta." },
                        { titulo: "Pode limitar a liberdade", descricao: "Força a seguir regras e estruturas específicas do framework." },
                        { titulo: "Pode ser desnecessário em projetos pequenos", descricao: "O overhead pode não compensar para aplicações simples." },
                        { titulo: "Pode deixar o projeto mais pesado", descricao: "Mais arquivos, dependências e recursos podem impactar a performance." },
                        { titulo: "Gera dependência", descricao: "Migrar para outra tecnologia pode ser caro e demorado." },
                        { titulo: "Requer atualizações constantes", descricao: "Versões antigas podem se tornar obsoletas rapidamente, exigindo manutenção frequente." },
                        { titulo: "Possíveis quebras em atualizações", descricao: "Mudanças grandes de versão podem exigir refatorações extensas." },
                    ]}
                />
            </div>
            <TitleContent icon="/images/icon_andarna.png" title="Vantagens e Desvantagens de usar Meta-frameworks" />
            <div className={styles.line}></div>
            <div className={styles.info}>
                <VantagensDesvantagens
                    vantagens={[
                        { titulo: "Ainda mais produtividade", descricao: "Automatiza configuração e integrações que o framework base não cobre." },
                        { titulo: "Código mais fácil de manter", descricao: "Fornece padrões e ferramentas para otimizar a organização e leitura do código." },
                        { titulo: "Reduz custos", descricao: "Menos tempo de desenvolvimento e manutenção diminui despesas." },
                        { titulo: "Mais segurança", descricao: "Herdam segurança do framework base e adicionam camadas extras de proteção." },
                        { titulo: "Simplifica tarefas complicadas", descricao: "Rotas dinâmicas, SSR (Server-Side Rendering), geração estática e otimização automática." },
                        { titulo: "Melhor experiência do desenvolvedor", descricao: "Ferramentas de hot reload, geração de código e integração automática." },
                    ]}
                    desvantagens={[
                        { titulo: "Menos controle do servidor", descricao: "Algumas configurações ficam ocultas ou restritas ao que o meta-framework permite." },
                        { titulo: "Pode ter dificuldade com tarefas pesadas", descricao: "Processos complexos de back-end podem precisar de soluções externas." },
                        { titulo: "Curva de aprendizado em alguns casos", descricao: "Especialmente quando combina conceitos novos com os do framework base." },
                        { titulo: "Pode ser mais pesado", descricao: "Adiciona outra camada sobre o framework, aumentando consumo de recursos." },
                        { titulo: "Pode ter problemas de compatibilidade", descricao: "Dependência de versões específicas do framework base e de bibliotecas." },
                        { titulo: "Menor flexibilidade para arquiteturas incomuns", descricao: "Pode limitar implementações muito personalizadas." },
                    ]}
                />
            </div>
        </div>
    )
}  