export default function PillarsSection() {
  return (
    <section className="pillars m-0">
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[80vh] items-stretch">
        {/* Media panel with gradient overlay */}
        <div 
          className="relative min-h-[60vh] md:min-h-[80vh] bg-[#2b3436] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?q=80&w=1600&auto=format&fit=crop)` }}
        >
          <div className="absolute inset-y-0 left-[40%] right-0 bg-gradient-to-r from-transparent to-[rgba(252,253,253,0.9)]" />
        </div>
        
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

