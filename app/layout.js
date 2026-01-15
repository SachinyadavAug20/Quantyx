import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./my.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Quantyx - Simple calculator",
    description: "This is a scientific calculator on the web",
    icons: {
        icon: "/favicon.png",
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="bg-slate-900">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
