import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

import './globals.css';
import { ModalProvider, ToastProvider } from '@/providers';

const font = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store - The place for all your purchases.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
