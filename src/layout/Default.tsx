import { FC } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const DefaultLayout: FC<any> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
            {children}
        </main>
        <Footer />
        </div>
    );
}

export default DefaultLayout;