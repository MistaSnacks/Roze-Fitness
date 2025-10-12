import Image from 'next/image';

export default function ResultsSection() {
  return (
    <section className="results relative bg-[linear-gradient(180deg,#2f383b,#232a2c)] py-10 md:py-16 before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-16 before:bg-[linear-gradient(90deg,rgba(255,255,255,0.05),rgba(255,255,255,0.25),rgba(255,255,255,0.05))] before:skew-y-[-3deg] before:origin-top-left before:opacity-30" id="results">
      <div className="container mx-auto max-w-[1200px] w-[92%]">
        <h2 className="text-center text-[clamp(28px,5vw,72px)] mt-16 mb-7 uppercase">
          <span className="text-transparent" style={{ WebkitTextStroke: '1px #E8FF3B' }}>REAL PEOPLE</span> REAL RESULTS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1.1fr] gap-[22px]">
          <figure className="bg-[var(--card)] text-[#dce6e8] rounded-[var(--radius-xl)] overflow-hidden p-0 m-0">
            <Image 
              src="https://images.unsplash.com/photo-1594381035661-717b9c2b4c0f?q=80&w=1400&auto=format&fit=crop" 
              alt="Member result"
              width={1400}
              height={1400}
              className="w-full h-full object-cover block"
            />
          </figure>
          
          <div className="bg-[var(--card)] text-[#dce6e8] rounded-[var(--radius-xl)] overflow-hidden p-[26px]">
            <h4 className="m-0 mb-[6px] tracking-[2px] uppercase">Bridgette</h4>
            <small className="opacity-70 inline-block mb-[14px]">Gym Workouts</small>
            <p>&quot;I have never felt better in my life. The best thing about your program is that each day is different. For me it&apos;s having new and exciting workouts to do each day. Thank you for changing my life.&quot;</p>
          </div>
          
          <figure className="bg-[var(--card)] text-[#dce6e8] rounded-[var(--radius-xl)] overflow-hidden p-0 m-0">
            <Image 
              src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1400&auto=format&fit=crop" 
              alt="Member result"
              width={1400}
              height={1400}
              className="w-full h-full object-cover block"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

