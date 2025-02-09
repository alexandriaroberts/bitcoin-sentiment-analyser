import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import ClientProvider from './components/ClientProvider';
import type React from 'react'; // Added import for React

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bitcoin Sentiment Analyzer',
  description: 'Analyze the sentiment of Bitcoin across Twitter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ClientProvider>
          <Navbar />
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
