import Link from "next/link";
import Logo from "@/components/shared/Logo";

export default function Header({ onMenuToggle }: { onMenuToggle?: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 sm:px-6 bg-theme-gradient shadow-md relative">
      {/* ── ฝั่งซ้าย: Hamburger (Mobile) ── */}
      <div className="flex items-center min-w-[40px]">
        <button 
          className="lg:hidden p-2 rounded-lg hover:bg-white/10 text-white transition-colors" 
          onClick={onMenuToggle}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* ── ตรงกลาง: Logo (Absolute Center) ── */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <Logo />
      </div>

      {/* ── ฝั่งขวา: Actions ── */}
      <div className="flex items-center gap-3 min-w-[40px] justify-end">
        {/* ปุ่มแจ้งเตือน */}
        <button
          className="relative w-10 h-10 flex items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10"
          aria-label="Notifications"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#0F5EC1]"></span>
        </button>

        {/* ปุ่มโปรไฟล์ */}
        <Link 
          href="/profile" 
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white/80 text-white transition-all hover:bg-white/10 active:scale-95"
          aria-label="Go to profile"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </Link>
      </div>
    </header>
  );
}