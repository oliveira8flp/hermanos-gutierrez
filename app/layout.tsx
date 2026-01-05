import type { Metadata } from "next";
import {Bungee} from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";

const Paquito_Medium = LocalFont({
    src: "./fonts/Paquito-Medium.ttf",
    variable: "--font-paquito",
});const Bungee_Font = Bungee({
    variable: "--font-bungee",
    weight: "400",
    subsets: ["latin"],
});



export const metadata: Metadata = {
    title: "Hermanos Gutierrez - South America Tour 2026",
    description: "UPCOMING TOUR IN SOUTH AMERICA 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${Bungee_Font.variable} ${Paquito_Medium.variable} antialiased overflow-x-hidden p-0 m-0 box-border`}>
    <main className=" h-[100vh] w-[100%]">
        {children}
    </main>
    </body>
    </html>
  );
}
