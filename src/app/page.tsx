'use client';

import { Header } from '@/components/header';
import { Hero } from './hero';
import { Stats } from './stats';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
      </main>
    </>
  );
}
