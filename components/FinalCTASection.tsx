import Link from 'next/link';

export default function FinalCTASection() {
  const benefits = [
    'Fresh workout for home and gym every weekday',
    'Inspiring, inclusive community',
    'Delicious, nutrition plan',
    'Never be bored by your fitness program again!'
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#e8eaeb] to-[#f4f6f7]">
      {/* Background image with blur */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1920&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px)'
        }}
      />
      
      <div className="container mx-auto max-w-[1200px] w-[92%] relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(36px,6vw,72px)] leading-[1] uppercase mb-4">
            <span className="block text-[#2b3436]">READY TO</span>
            <span className="block highlight">GET STARTED?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--pink)] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                    <path d="M1 5.5L5 9.5L13 1.5" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[#2b3436] text-lg font-medium">{benefit}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-[#2b3436] rounded-2xl p-8 text-center">
            <div className="text-white text-3xl font-bold mb-2">GET IT NOW</div>
            <div className="w-24 h-px bg-white/30 mx-auto mb-4" />
            <div className="text-white/80 text-xl mb-8">Only $29.99/mo</div>
            <Link href="#join" className="btn btn--light btn--hero w-full block text-center">
              GET IT NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

