import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "The Blog - Este é um blog com Next.js",
    description: "Essa seria a descrição dessa página.",
};

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="pt-BR">
            {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body> */}
            <body className="qualquer">
                <header>
                    <h1>Header</h1>
                </header>

                <div className="bg-red-500">{children}</div>

                <footer>
                    <h1>Footer</h1>
                </footer>
            </body>
        </html>
    );
}
