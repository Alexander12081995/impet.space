import "./globals.css";
import "./onest.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "IMPET",
    description: "",
};

export default function RootLayout({ children, params }: { children: React.ReactNode, params: {locale: string} }) {
    return (
        <html lang={params.locale}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
                <body className={inter.className}>
                        {children}
                </body>
        </html>
    );
}
