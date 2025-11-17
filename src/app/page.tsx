'use client';

import { Header } from '@/components/header';
import { Hero } from './hero';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
