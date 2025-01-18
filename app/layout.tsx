import type { Metadata } from 'next';
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/NavBar/';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
    variable: '--font-space-grotesk',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'HackXR 2025',
    description: 'Triton Extended Reality Hackathon 2025',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${spaceGrotesk.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
            >
                <Grain />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
