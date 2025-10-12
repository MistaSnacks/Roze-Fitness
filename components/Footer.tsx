'use client';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-[#202628] text-[#c7d1d4] py-6 text-center">
      <div className="container mx-auto max-w-[1200px] w-[92%]">
        <p>© {year} Roze Fitness</p>
      </div>
    </footer>
  );
}


