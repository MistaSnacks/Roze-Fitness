import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden" style={{
      background: 'linear-gradient(135deg, rgba(252,217,217,0.4) 0%, rgba(255,230,240,0.3) 50%, rgba(245,245,245,0.2) 100%)'
    }}>
      {/* Diagonal accent stripe */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b3436] to-[#3d4a4d] transform -skew-y-3 origin-top-left" style={{ top: '-5%', height: '110%' }} />
      
      <div className="container mx-auto max-w-[1200px] w-[92%] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h2 className="text-[clamp(32px,6vw,72px)] leading-[0.95] mb-8 uppercase text-white">
              <span className="block">NEW & FUN</span>
              <span className="block text-transparent" style={{ WebkitTextStroke: '2px #fff' }}>WORKOUTS</span>
              <span className="block">EVERY DAY</span>
            </h2>
            
            <p className="text-white/90 text-lg max-w-2xl mb-8">
              Get fitter, stronger, healthier and more confident. Join me and get exclusive access to my personal workouts, 
              meal plans and fitness secrets that are changing the lives of thousands of women around the world.
            </p>
          </div>
          
          <div className="flex flex-col items-center lg:items-end gap-4">
            <div className="text-center lg:text-right">
              <div className="text-white text-2xl font-bold mb-2">GET IT NOW</div>
              <div className="w-32 h-px bg-white/30 mx-auto lg:ml-auto mb-4" />
              <div className="text-white/80 text-lg mb-6">Only $29.99/mo</div>
            </div>
            <Link href="#join" className="btn btn--light btn--hero">
              GET IT NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

