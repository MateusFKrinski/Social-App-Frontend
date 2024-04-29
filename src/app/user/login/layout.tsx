import type {Metadata} from "next";
import React from "react";
import "./globals.css"

export const metadata: Metadata = {
    title: "Login",
    description: "Página de acesso e autenticação ao plataforma",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
        <body>{children}</body>
        </html>
    );
}
