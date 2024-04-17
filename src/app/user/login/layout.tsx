import type {Metadata} from "next";
import {Inter} from "next/font/google";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Login",
    description: "Página de acesso e autenticação ao plataforma",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
        <body className={inter.className}>{children}</body>
        </html>
    );
}
