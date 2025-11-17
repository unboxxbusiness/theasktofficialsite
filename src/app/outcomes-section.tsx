'use client';

import { CheckCircle, XCircle } from 'lucide-react';

export function OutcomesSection() {
  const abilities = [
    'Earn from home (part-time or full-time)',
    'Offer freelancing services (content, design, social media)',
    'Grow a small online business',
    'Get better job opportunities',
    'Work with clients across India & globally',
    'Build confidence & identity again',
  ];

  const conditions = [
    'You have a long career gap',
    'Your English is not strong',
    'You only have a mobile phone',
    'You’ve never worked before',
  ];

  return (
    <section className="py-16 md:py-32 bg-card">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-start">
          <div className="sticky top-24">
            <h2 className="text-4xl font-bold">
              What Can You Do After Learning?
            </h2>
          </div>
          <div className="space-y-10">
            <div>
              <p className="font-semibold text-lg mb-4">You will be able to:</p>
              <ul className="space-y-3">
                {abilities.map((ability, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-foreground/90">{ability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-lg mb-4">Even if:</p>
              <ul className="space-y-3">
                {conditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                     <span className="text-foreground/90">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
