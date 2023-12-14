import "@/styles/global.css";
import type { AppProps } from 'next/app';
import { ThemeProvider } from "next-themes"
import DefaultLayout from '@/layout/Default';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider attribute="class">
            <DefaultLayout>
                <Component {...pageProps} />
            </DefaultLayout>
        </ThemeProvider>
    )
}

export default App;