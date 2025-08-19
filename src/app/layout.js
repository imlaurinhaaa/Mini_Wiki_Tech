import Header from '../components/Header/Header'
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <body>
                <Header title="Mini Wiki Tech" subtitle="Pesquisa de Tecnologias" />
                {children}
            </body>
        </html>
    );
}