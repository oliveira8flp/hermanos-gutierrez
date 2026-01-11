import type { Metadata } from "next";
import {Bungee} from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
import Footer from "@/app/_components/footer";
import BlackNavBar from "@/app/_components/black-navBar";
import SmoothScrolling from "@/app/_components/smoothScrolling";
import Cursor from "@/app/_components/cursor";

const Paquito_Medium = LocalFont({
    src: "./_fonts/Paquito-Medium.ttf",
    variable: "--font-paquito",
});const Bungee_Font = Bungee({
    variable: "--font-bungee",
    weight: "400",
    subsets: ["latin"],
});



export const metadata: Metadata = {
    title: "Hermanos Gutierrez - South America tour 2026",
    description: "UPCOMING TOUR IN SOUTH AMERICA 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">
    <body className={`${Bungee_Font.variable} ${Paquito_Medium.variable} antialiased p-0 m-0 box-border no-scroll`}>
            <BlackNavBar/>
            <Cursor />
            <SmoothScrolling />
            <main className="min-height-[100vh] w-full">
                {children}
            </main>
            <Footer />
    </body>
    </html>
  );
}
