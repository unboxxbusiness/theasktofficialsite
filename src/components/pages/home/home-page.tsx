'use client';

import { Header } from '@/components/header';
import { Hero } from './hero';

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
