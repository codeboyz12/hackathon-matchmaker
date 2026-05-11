import Link from "next/link";

export default function Header({ onMenuToggle }: { onMenuToggle?: () => void }) {
  return (
    <header className="sticky top-0 z-50 flex items-center h-16 px-6 sm:px-10 bg-theme-gradient shadow-sm w-full">
      {/* ── ฝั่งซ้าย: Hamburger (Mobile) ── */}
      <button 
        className="lg:hidden p-2 mr-4 rounded-lg hover:bg-white/10 text-white transition-colors" 
        onClick={onMenuToggle}
        aria-label="Open menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* ── Logo & Nav ── */}
      <div className="flex flex-1 items-center gap-12">
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Logo.svg" alt="Grand Line Logo" className="h-6 sm:h-7 object-contain" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/find-team" className="text-white text-xs font-bold tracking-wider hover:text-white/80 transition-colors uppercase">FIND TEAM</Link>
          <Link href="/skill-bank" className="text-white text-xs font-bold tracking-wider hover:text-white/80 transition-colors uppercase">SKILL BANK</Link>
          <Link href="/active-team" className="text-white text-xs font-bold tracking-wider hover:text-white/80 transition-colors uppercase">ACTIVE TEAM</Link>
          <Link href="/saved" className="text-white text-xs font-bold tracking-wider hover:text-white/80 transition-colors uppercase">SAVED</Link>
        </nav>
      </div>

      {/* ── ฝั่งขวา: Actions ── */}
      <div className="flex items-center gap-6">
        <button
          className="relative text-white hover:text-white/80 transition-colors"
          aria-label="Notifications"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>

        <Link 
          href="/profile" 
          className="w-9 h-9 rounded-full border-2 border-white/80 hover:border-white transition-colors overflow-hidden"
          aria-label="Go to profile"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/avatar.png" alt="Profile" className="w-full h-full object-cover" />
        </Link>
      </div>
    </header>
  );
}
