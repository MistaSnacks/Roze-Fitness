import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white text-center bg-[linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1920&auto=format&fit=crop')] bg-center bg-cover bg-no-repeat">
      {/* Top chevrons */}
      <div className="absolute top-[5vh] left-1/2 -translate-x-1/2 text-white/50 z-10 animate-float">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 15L15 30L20 35L30 25L40 35L45 30L30 15Z" fill="currentColor" opacity="0.6"/>
          <path d="M30 25L15 40L20 45L30 35L40 45L45 40L30 25Z" fill="currentColor" opacity="0.8"/>
        </svg>
      </div>

      <div className="container mx-auto max-w-[1200px] w-[92%] py-8 z-20">
        <p className="text-[clamp(14px,1.5vw,18px)] font-normal m-0 mb-4 opacity-90 tracking-wide">
          Join today and get access to
        </p>
        <h1 className="text-[52px] leading-[0.95] m-0 font-black uppercase flex flex-col gap-1">
          <span className="highlight">NEW CORE</span>
          <span className="highlight">CHALLENGE</span>
          <span>WORKOUTS</span>
        </h1>
        <p className="text-[clamp(16px,2vw,22px)] font-medium my-6 opacity-95">
          Every day in October
        </p>
        <Link href="#join" className="btn btn--primary btn--hero">
          JOIN NOW
        </Link>
      </div>

      {/* Bottom chevron */}
      <div className="absolute bottom-[5vh] left-1/2 -translate-x-1/2 rotate-180 text-white/50 z-10 animate-float-reverse">
        <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 25L15 10L20 5L30 15L40 5L45 10L30 25Z" fill="currentColor" opacity="0.6"/>
        </svg>
      </div>
    </section>
  );
}

