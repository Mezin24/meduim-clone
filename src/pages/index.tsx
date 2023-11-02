import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Head>
        <title>Sanity io</title>
      </Head>
      <Header />
      <Hero />
    </div>
  );
}
