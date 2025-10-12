import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#364042]">
      <div className="container mx-auto max-w-[1200px] w-[92%]">
        <nav className="flex items-center justify-between py-3">
          <div className="brand font-extrabold tracking-[2px]">
            ALEXIA <span className="opacity-80">CLARK</span>
          </div>
          
          <ul className="hidden md:flex gap-5 list-none m-0 p-0">
            <li><Link href="#workouts" className="text-[var(--bg)] no-underline font-semibold opacity-90 hover:opacity-100">Workouts</Link></li>
            <li><Link href="#nutrition" className="text-[var(--bg)] no-underline font-semibold opacity-90 hover:opacity-100">Nutrition</Link></li>
            <li><Link href="#shop" className="text-[var(--bg)] no-underline font-semibold opacity-90 hover:opacity-100">Shop</Link></li>
            <li><Link href="#faqs" className="text-[var(--bg)] no-underline font-semibold opacity-90 hover:opacity-100">FAQs</Link></li>
            <li><Link href="#blog" className="text-[var(--bg)] no-underline font-semibold opacity-90 hover:opacity-100">Blog</Link></li>
            <li><Link href="#login" className="text-[var(--bg)] no-underline font-semibold opacity-90 hover:opacity-100">Log In</Link></li>
          </ul>
          
          <Link href="#join" className="btn btn--primary">
            Join Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

