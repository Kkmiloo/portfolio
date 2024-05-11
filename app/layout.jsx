import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

import Navbar from '@/components/NavBar';
import { portafolio } from './assets';
import { LangContext } from '@/src/context/LangContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Camilo Reyes | Portfolio',
  description: 'This is my portfolio',
  openGraph: {
    title: 'Camilo Reyes | Portfolio',
    description: 'This is my portfolio',
    images: [
      {
        url: '/ogimage.png',
        width: 1200,
        height: 630,
        alt: 'Camilo Reyes Portfolio',
      },
    ],
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
