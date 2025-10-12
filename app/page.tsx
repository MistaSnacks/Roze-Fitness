import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProgramSection from '@/components/ProgramSection';
import AboutSection from '@/components/AboutSection';
import PillarsSection from '@/components/PillarsSection';
import ResultsSection from '@/components/ResultsSection';
import AppSection from '@/components/AppSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        {/* Program 1: Signature */}
        <ProgramSection
          title={
            <>
              <span className="muted">1 Foundation</span><br/>
              <span className="highlight">2 Signature</span>
            </>
          }
          features={[
            'New, fun, effective workouts released each day',
            'Unique creative workouts so you never get bored and get results',
            'Tone, define, and shred your body',
            'Improve strength, coordination, stamina',
            'Built-in cardio, all fitness levels',
            'Adjust your workout time 12–60 minutes',
            'Weekly and monthly challenges'
          ]}
          bgImage="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1600&auto=format&fit=crop"
          variant="signature"
        />
        
        {/* Program 2: Split */}
        <ProgramSection
          title={
            <>
              <span className="muted">1 Foundation</span><br/>
              <span className="muted">2 Signature</span><br/>
              <span className="highlight">3 Split</span>
            </>
          }
          features={[
            'Build muscle and focus on muscle groups',
            'Next-level strength gains',
            'Upper/lower split with abs and mobility',
            'New workouts released each day',
            'All fitness levels, 12–60 minutes',
            'Monthly challenges'
          ]}
          bgImage="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1600&auto=format&fit=crop"
          variant="split"
        />
        
        <AboutSection />
        <PillarsSection />
        <ResultsSection />
        <AppSection />
      </main>
      <Footer />
    </>
  );
}
