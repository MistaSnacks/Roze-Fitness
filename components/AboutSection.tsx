import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="about bg-[#5a6568] m-0">
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[80vh] items-stretch">
        {/* Media panel with gradient overlay */}
        <div 
          className="relative min-h-[60vh] md:min-h-[80vh] bg-[#2b3436] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop)` }}
        >
          <div className="absolute inset-y-0 left-[40%] right-0 bg-gradient-to-r from-transparent to-[#5a6568]" />
        </div>
        
        {/* Content panel */}
        <div className="bg-[#5a6568] text-[#e8edef] px-[8vw] py-[46px] flex flex-col justify-center">
          <h2 className="text-[clamp(32px,5vw,64px)] leading-[1.1] m-0 mb-6 uppercase text-white">
            HI! I&apos;M <span className="highlight">ALEXIA</span>
          </h2>
          <p className="mb-4">
            I am a fully certified personal trainer and fitness nutrition specialist. I have been training clients for nearly 10 years and during that time I have refined my fitness strategy to provide the best results, but more importantly, to do so while having fun! I know that if you enjoy your workouts you are much more likely to stick with them, and the QUEENTEAM program is all about building amazing habits for how you workout and eat.
          </p>
          <p className="mb-6">
            Regular exercise isn&apos;t just great for your body, it&apos;s also going to help you feel happier, more optimistic and give you more energy. My favorite thing about what I do is seeing how people transform both mentally and physically when they incorporate exercise into their lifestyle. I focus on creating a program which will never grow boring, so that it is easy for you to make my workouts part of your daily routine. That&apos;s why I write a whole new workout every single week day – I want to offer you a program that you can stick with for life!
          </p>
          <Link href="#workouts" className="btn btn--outline btn--hero self-start">
            WORKOUT WITH ME
          </Link>
        </div>
      </div>
    </section>
  );
}

