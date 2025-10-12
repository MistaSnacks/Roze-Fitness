'use client';

import { useState } from 'react';
import Link from 'next/link';

const pillars = [
  {
    id: 1,
    name: 'Exercise',
    title: '1 EXERCISE',
    features: [
      'Fresh workouts, five days a week',
      'Programmed daily by me for maximum results',
      'No additional cardio required',
      'Equivalent options for home or gym equipment',
      'Flex to your schedule: 30, 45 or 60 minutes',
      'Endless variety: Daily challenges plus a Friday Challenge to really push you',
      'Video demonstrations for each exercise',
      'Plus direct support from me when you need it'
    ],
    bgImage: 'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Nutrition',
    title: '2 NUTRITION',
    features: [
      'I share my favorite recipes with you, so you can eat what I eat',
      'Nutritionally balanced',
      '3 meals, 2 snacks per day',
      'Ever changing menu',
      'Weekly shopping list'
    ],
    bgImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Support',
    title: '3 SUPPORT',
    features: [
      'Be part of the QUEENTEAM, the most supportive fitness community out there',
      'Get help and accountability via my invite-only Facebook group',
      'Retreats and meetups',
      'Need support? Email me for personalised advice'
    ],
    bgImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop'
  }
];

export default function PillarsShowcase() {
  const [activePillar, setActivePillar] = useState(1);
  const currentPillar = pillars.find(p => p.id === activePillar) || pillars[0];

  return (
    <section className="pillars-showcase py-16 bg-[#f8f9fa]">
      <div className="container mx-auto max-w-[1200px] w-[92%]">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(32px,5vw,64px)] leading-[1] uppercase mb-4">
            <span className="block text-[#2b3436]">NOT YOUR</span>
            <span className="block text-[#2b3436]">AVERAGE</span>
            <span className="block highlight">FITNESS PROGRAM</span>
          </h2>
          <p className="text-[#2b3436] text-lg mt-6">
            Effective, inclusive, supportive, and transformative. My Program has been built around 3 core pillars:
          </p>
        </div>

        {/* Pillar selector tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActivePillar(pillar.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-bold text-lg transition-all ${
                activePillar === pillar.id
                  ? 'bg-[var(--pink)] text-[#222] shadow-lg scale-105'
                  : 'bg-white text-[#2b3436] hover:bg-[var(--pink)]/10 hover:shadow-md'
              }`}
            >
              <span className="text-2xl">{pillar.id}</span>
              <span>{pillar.name}</span>
            </button>
          ))}
        </div>

        {/* Active pillar display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-2xl">
          {/* Image side */}
          <div
            className="relative min-h-[400px] md:min-h-[600px] bg-[#2b3436] bg-center bg-cover"
            style={{ backgroundImage: `url(${currentPillar.bgImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
          </div>

          {/* Content side */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-[56px] leading-[0.9] mb-8 uppercase font-black">
              <span className="highlight">{currentPillar.title}</span>
            </h3>

            <ul className="space-y-3 mb-8">
              {currentPillar.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[var(--pink)] text-xl">-</span>
                  <span className="text-[#2b3436] leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <Link href="#join" className="btn btn--outline btn--hero self-start">
              JOIN NOW!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

