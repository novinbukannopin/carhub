import type {Metadata} from "next";
import "./globals.css";
import {Footer, Navbar} from "@/components";


export const metadata: Metadata = {
    title: "Car Hub",
    description: "The best place to buy and sell cars",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={"relative"}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
