import Link from 'next/link';
import Image from 'next/image';

export default function AppSection() {
  return (
    <section className="app relative bg-[linear-gradient(180deg,#f4f7f8_10%,#e9eff1_60%,#e5ecee_100%)] text-[#243033] py-16 before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-16 before:bg-[linear-gradient(90deg,rgba(255,255,255,0.05),rgba(255,255,255,0.25),rgba(255,255,255,0.05))] before:skew-y-[-3deg] before:origin-top-left before:opacity-30 after:content-[''] after:absolute after:inset-0 after:bg-[url('https://images.unsplash.com/photo-1603394663571-bf3d78c1397a?q=80&w=1920&auto=format&fit=crop')] after:bg-center after:bg-cover after:opacity-[0.12] after:blur-[2px] after:pointer-events-none" id="mobile-app">
      <div className="container mx-auto max-w-[1200px] w-[92%] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-7 items-center">
          <div className="app__phone">
            <Image 
              src="https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1200&auto=format&fit=crop" 
              alt="App preview"
              width={1200}
              height={1600}
              className="w-full rounded-[32px] shadow-[0_14px_40px_rgba(0,0,0,.2)]"
            />
          </div>
          
          <div className="app__content">
            <h2 className="text-[clamp(32px,5vw,64px)] leading-[1.1] m-0 mb-6 uppercase">
              <span className="muted">Workouts + nutrition</span><br/>
              <span className="highlight">On the go</span>
            </h2>
            <p className="mb-6">
              Wherever you are, my program will keep you on track. Delivering fresh, daily workouts for home and gym, plus a new meal plan and shopping list each week, right into the palm of your hand.
            </p>
            <Link href="#join" className="btn btn--primary btn--hero">
              Join Now!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

