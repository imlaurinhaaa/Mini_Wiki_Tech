import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Image from "next/image";
import CardsArquivos from "@/components/Cards/CardsArquivos";

export default function ArquivosEspeciais() {
    return (
        <div className={styles.container}>
           <div className={styles.banner}>
                <h1>Arquivos especiais do App Router e raiz do projeto</h1>
                <p>Venha conhecer mais sobre os arquivos especiais</p>
            </div>

            <div className={styles.titleContent}>
                <Image src="/images/dragao-feirge.png" alt="icone" width={50} height={50} />
                <h3 className={styles.title}>O que são arquivos especiais?</h3>
            </div>
            <div className={styles.line}></div>
            <div className={styles.content}>
                <p className={styles.textContent}>No desenvolvimento com o App Router do Next.js, alguns arquivos especiais têm funções próprias que organizam a estrutura do projeto e melhoram a experiência do usuário. Cada um deles atua em situações específicas, como tratamento de erros, estados de carregamento, páginas não encontradas e definição de layouts globais ou por rota. Entender a diferença entre arquivos como error.js, global-error.js, not-found.js, loading.js, layout.js e page.js é essencial para estruturar bem um projeto e aproveitar ao máximo os recursos de renderização e navegação do framework.</p>
            </div>
            <div className={styles.titleContent}>
                <Image src="/images/dragao-feirge.png" alt="icone" width={50} height={50} />
                <h3 className={styles.title}>Diferença e função dos arquivos: error.js / global-error.js</h3>
            </div>
            <div className={styles.line}></div>
            <div className={styles.contentInformation}>
                <CardsArquivos 
                title="Error.js"
                description="Captura e trata erros que ocorrem dentro de componentes ou rotas específicas. É usado para fornecer uma experiência de usuário mais localizada e controlada para erros específicos de um pedaço do aplicativo."
                additionalInfo="Quando um erro ocorre em um componente ou rota onde um error.js foi definido, ele será renderizado em vez do componente problemático, fornecendo uma mensagem de erro personalizada ou opções de recuperação. Isso evita que um erro em um único componente interrompa toda a aplicação."/>
                <CardsArquivos 
                title="Global-error.js"
                description="Captura e trata erros que ocorrem em toda a aplicação, incluindo a página inicial e erros que não podem ser capturados por um error.js  específico. É usado para fornecer uma mensagem de erro consistente e um fallback para toda a aplicação quando um erro crítico ocorre."
                additionalInfo="Se um erro ocorrer que não é tratado por um error.js específico, ou se ocorrer um erro na página inicial, o global-error.js será renderizado. Isso garante que a aplicação não quebre completamente e que o usuário veja uma mensagem de erro geral em vez de uma tela em branco ou um erro não tratado."/>
            </div>
            <div className={styles.titleContent}>
                <Image src="/images/dragao-feirge.png" alt="icone" width={50} height={50} />
                <h3 className={styles.title}>Função e uso de not-found.js</h3>
            </div>
            <div className={styles.line}></div>
            <div className={styles.content}>
                <p className={styles.textContent}>O arquivo not-found.js em um projeto Next.js é usado para exibir uma página personalizada quando o usuário acessa uma rota que não existe. Ele substitui a página padrão de erro 404 do navegador, permitindo que você crie uma experiência mais amigável para o usuário, com informações relevantes e um design consistente com o resto do seu site.</p>
                <p className={styles.textContent}>A função principal do not-found.js é renderizar uma página de erro 404 quando uma rota não é encontrada. Isso acontece quando um usuário tenta acessar uma URL que não corresponde a nenhuma rota definida no seu projeto Next.js.</p>
            </div>
            <div className={styles.titleContent}>
                <Image src="/images/dragao-feirge.png" alt="icone" width={50} height={50} />
                <h3 className={styles.title}>Função e uso de loading.js.</h3>
            </div>
            <div className={styles.line}></div>
            <div className={styles.content}>
                <p className={styles.textContent}>Em desenvolvimento web, loading.js geralmente se refere a um arquivo JavaScript usado para manipular a exibição de uma tela de carregamento (loading screen) enquanto a página ou seus componentes são carregados. O objetivo principal é fornecer feedback visual ao usuário durante o processo de carregamento, evitando que a página pareça estática ou travada.</p>
                <h3 className={styles.subTitle}>Exibir uma tela de carregamento:</h3>
                <p className={styles.textContent}>O loading.js pode ser usado para mostrar uma animação, um spinner, uma mensagem ou qualquer outro tipo de elemento visual que indique que a página está sendo carregada. </p>
                <h3 className={styles.subTitle}>Ocultar a tela de carregamento:</h3>
                <p className={styles.textContent}>Quando o conteúdo da página é totalmente carregado, o loading.js oculta a tela de carregamento e exibe o conteúdo principal.</p>
                <h3 className={styles.subTitle}>Gerenciar o carregamento assíncrono:</h3>
                <p className={styles.textContent}>Pode ser usado para gerenciar o carregamento de scripts e outros recursos de forma assíncrona, garantindo que o conteúdo essencial seja carregado primeiro e que a tela de carregamento seja exibida enquanto outros elementos são carregados em segundo plano.</p>
            </div>
            <div className={styles.titleContent}>
                <Image src="/images/dragao-feirge.png" alt="icone" width={50} height={50} />
                <h3 className={styles.title}>Aplicação global e por rota do layout.js.</h3>
            </div>
            <div className={styles.line}></div>
            <div className={styles.content}>
                <p className={styles.textContent}>Em Next.js, o arquivo layout.js pode ser usado para definir layouts tanto globalmente quanto por rota. O layout global é aplicado a toda a aplicação e é definido na pasta app. Layouts por rota são definidos dentro de pastas específicas de rota, permitindo layouts diferentes para diferentes seções do site.</p>
                <h3 className={styles.subTitle}>Layout Global:</h3>
                <p className={styles.textContent}>Para criar um layout global, coloque o arquivo layout.js (ou .jsx, .tsx) na pasta app. Este layout será compartilhado por todas as rotas da aplicação, exceto aquelas que possuem seus próprios layouts definidos. É comum usar o layout global para definir elementos como a estrutura básica da página (cabeçalho, rodapé, barras laterais), estilos globais e a estrutura de navegação principal, de acordo com guias do Codante.</p>
                <h3 className={styles.subTitle}>Layout por Rota:</h3>
                <p className={styles.textContent}>Para aplicar um layout a rotas específicas, crie uma pasta para cada rota (ou conjunto de rotas) e dentro dela coloque o arquivo layout.js. O layout definido dentro de uma pasta de rota se aplica somente àquela rota e suas subpastas (rotas aninhadas). Isso permite que você personalize a estrutura e o conteúdo de diferentes partes da sua aplicação de forma independente. Por exemplo, você pode ter um layout diferente para a página de painel de controle, com elementos de navegação específicos, do que para a página inicial.</p>
            </div>
            <div className={styles.titleContent}>
                <Image src="/images/dragao-feirge.png" alt="icone" width={50} height={50} />
                <h3 className={styles.title}>Função do page.js em cada rota.</h3>
            </div>
            <div className={styles.line}></div>
            <div className={styles.content}>
                <p className={styles.textContent}>No Next.js, o arquivo page.js tem a função central de renderizar a interface de cada página associada a uma rota específica. Ele é considerado um arquivo especial dentro de cada diretório de rota, pois é justamente o que torna aquela rota acessível publicamente.</p>
                <p className={styles.textContent}>Isso acontece porque o roteamento no Next.js é baseado em arquivos e pastas: cada diretório representa um segmento da rota, e a estrutura da URL reflete diretamente a organização do projeto. Assim, para criar uma nova página acessível, basta adicionar um arquivo page.js (ou page.jsx, page.ts, page.tsx) dentro do diretório correspondente à rota desejada.</p>
                <p className={styles.textContent}>Em resumo, o page.js exporta um componente React que será exibido sempre que a rota for acessada, servindo como o ponto principal de renderização da interface daquela página no aplicativo.</p>
            </div>
        </div>
    )
}