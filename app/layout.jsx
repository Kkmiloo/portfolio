import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

import Navbar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Camilo Reyes | Portfolio',
  description: 'This is my portfolio',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
