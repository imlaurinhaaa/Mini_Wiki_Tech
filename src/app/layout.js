import Header from '../components/Header/Header'
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <body>
                <Header title="" subtitle="" />
                {children}
            </body>
        </html>
    );
}