'use client';

import { AlertTriangle } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    'Career break after marriage or motherhood',
    'No confidence with technology or English',
    'Family responsibilities – no time for long courses',
    'Fear of online scams and fake institutes',
    'Dream of earning from home, but don’t know where to start',
  ];

  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-start">
          <div className="sticky top-24">
             <h2 className="text-4xl font-bold">
                You Want to Earn… But Something Is Holding You Back
             </h2>
          </div>
          <div className="space-y-8">
            <p className="text-muted-foreground">
              So many Indian women feel this way but don’t say it out loud:
            </p>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 flex-shrink-0 text-amber-500 mt-1" />
                  <p className="text-foreground/90 m-0">{problem}</p>
                </div>
              ))}
            </div>
            <div className="text-foreground font-semibold space-y-2">
                 <p className='m-0'>You are not alone.</p>
                 <p className='m-0'>Your dreams are valid.</p>
                 <p className='m-0'>And it is absolutely possible to start again.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
