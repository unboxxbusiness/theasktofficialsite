'use client';

import { Header } from '@/components/header';
import { Hero } from './hero';
import { ProblemSection } from './problem-section';
import { MissionSection } from './mission-section';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <MissionSection />
      </main>
    </>
  );
}
