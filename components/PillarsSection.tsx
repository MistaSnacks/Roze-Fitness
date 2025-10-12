export default function PillarsSection() {
  return (
    <section className="pillars m-0">
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[80vh] items-stretch">
        {/* Media panel with gradient overlay */}
        <div 
          className="relative min-h-[60vh] md:min-h-[80vh] bg-[var(--ink)] bg-center bg-cover bg-no-repeat after:content-[''] after:absolute after:inset-y-0 after:left-[40%] after:right-0 after:bg-[linear-gradient(90deg,rgba(255,255,255,0.0)_0%,rgba(255,255,255,0.9)_90%)]"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?q=80&w=1600&auto=format&fit=crop)` }}
        />
        
        {/* Content panel */}
        <div className="bg-[#fcfdfd] text-[#1f2a2d] px-[8vw] py-[46px] flex flex-col justify-center">
          <h2 className="text-[clamp(32px,5vw,64px)] leading-[1.1] m-0 mb-6 uppercase">
            <span className="muted">NOT YOUR AVERAGE</span><br/>
            <span className="highlight">FITNESS PROGRAM</span>
          </h2>
          <p className="mb-6">
            Effective, inclusive, supportive, and transformative. My program has been built around 3 core pillars:
          </p>
          <ol className="text-[clamp(18px,2.5vw,28px)] font-extrabold list-decimal pl-5">
            <li>Exercise</li>
            <li>Nutrition</li>
            <li>Support</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

