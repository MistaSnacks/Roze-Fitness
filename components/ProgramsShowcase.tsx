'use client';

import { useState } from 'react';
import Link from 'next/link';

const programs = [
  {
    id: 1,
    name: 'Foundation',
    title: (
      <>
        <span className="text-[#6a7679]">1 FOUNDATION</span>
      </>
    ),
    features: [
      'Designed for those beginning their fitness journey and those returning from injury',
      'Designed to get RESULTS and optimize overall fitness',
      'Designed to help you develop a healthy lifestyle',
      'New workouts released each day for home & gym',
      'Quick, time efficient, results oriented workouts in less than 30 minutes'
    ],
    bgImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Signature',
    title: (
      <>
        <span className="text-[#6a7679]">1 FOUNDATION</span><br/>
        <span className="highlight">2 SIGNATURE</span>
      </>
    ),
    features: [
      'New, fun, effective workouts released each day',
      'Unique creative workouts so you never get bored and get RESULTS',
      'Workouts designed to tone, define, and shred your body',
      'Workouts designed to improve your strength, coordination, stamina',
      'Workouts with built in cardio',
      'Great for all fitness levels',
      'Adjust your workout time from 12min – 60min',
      'Weekly and monthly challenges'
    ],
    bgImage: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Split',
    title: (
      <>
        <span className="text-[#6a7679]">1 FOUNDATION</span><br/>
        <span className="text-[#6a7679]">2 SIGNATURE</span><br/>
        <span className="highlight">3 SPLIT</span>
      </>
    ),
    features: [
      'Workouts designed to build muscle and focus on muscle groups',
      'Designed for next level strength gains',
      'Split the week with intense upper body and lower body workouts',
      'Includes abs and mobility training',
      'New workouts released each day',
      'Suitable for all fitness levels',
      'Adjust your workout time from 12min – 60min',
      'Monthly challenges'
    ],
    bgImage: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1600&auto=format&fit=crop'
  }
];

export default function ProgramsShowcase() {
  const [activeProgram, setActiveProgram] = useState(2);
  const currentProgram = programs.find(p => p.id === activeProgram) || programs[1];

  return (
    <section className="programs-showcase py-16 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
      <div className="container mx-auto max-w-[1200px] w-[92%]">
        <h2 className="text-center text-[clamp(32px,5vw,64px)] leading-[0.95] mb-12 uppercase">
          <span className="block text-[#2b3436]">INTRODUCING</span>
          <span className="block highlight">3 PROGRAMS</span>
        </h2>

        {/* Program selector tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {programs.map((program) => (
            <button
              key={program.id}
              onClick={() => setActiveProgram(program.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-bold text-lg transition-all ${
                activeProgram === program.id
                  ? 'bg-[var(--pink)] text-[#222] shadow-lg scale-105'
                  : 'bg-white text-[#2b3436] hover:bg-[var(--pink)]/10 hover:shadow-md'
              }`}
            >
              <span className="text-2xl">{program.id}</span>
              <span>{program.name}</span>
            </button>
          ))}
        </div>

        {/* Active program display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-2xl">
          {/* Image side */}
          <div
            className="relative min-h-[400px] md:min-h-[600px] bg-[#2b3436] bg-center bg-cover"
            style={{ backgroundImage: `url(${currentProgram.bgImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
          </div>

          {/* Content side */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-[48px] leading-[0.9] mb-6 uppercase font-black">
              {currentProgram.title}
            </h3>

            <ul className="space-y-3 mb-8">
              {currentProgram.features.map((feature, index) => (
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

