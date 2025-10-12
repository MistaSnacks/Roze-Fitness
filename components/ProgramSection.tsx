import Link from 'next/link';

interface ProgramSectionProps {
  title: React.ReactNode;
  features: string[];
  bgImage: string;
  variant?: 'signature' | 'split';
}

export default function ProgramSection({ title, features, bgImage, variant = 'signature' }: ProgramSectionProps) {
  return (
    <section className={`program program--${variant} m-0`}>
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[80vh] items-stretch">
        {/* Media panel with gradient overlay */}
        <div 
          className="relative min-h-[60vh] md:min-h-[80vh] bg-[#2b3436] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-y-0 left-[40%] right-0 bg-gradient-to-r from-transparent to-[rgba(252,253,253,0.9)]" />
        </div>
        
        {/* Content panel */}
        <div className="bg-[#fcfdfd] text-[#1f2a2d] px-[8vw] py-[46px] flex flex-col justify-center">
          <h3 className="m-0 mb-3 text-[52px] leading-none uppercase">
            {title}
          </h3>
          <ul className="leading-[1.7] list-disc pl-5">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <Link href="#join" className="btn btn--outline btn--hero mt-6 self-start">
            Join Now!
          </Link>
        </div>
      </div>
    </section>
  );
}

