import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Arterio Design Studio - Premium Interior Design',
  description: 'Transform your space with Arterio Design Studio. Expert interior design services combining modern aesthetics with timeless elegance.',
  keywords: 'interior design, luxury design, home renovation, commercial design, interior decorator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-inter">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}