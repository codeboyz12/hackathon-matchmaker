"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AvatarPlaceholder from "@/components/shared/AvatarPlaceholder";

/**
 * Sidebar navigation — desktop: always visible fixed left, mobile: slide-in drawer overlay.
 * Figma shows left blue-accent border on mobile drawer with close chevron (‹) top-right.
 */

const navItems = [
  { href: "/profile",    label: "Profile",    icon: "👤" },
  { href: "/skill-bank", label: "Skill Bank", icon: "🏆" },
  { href: "/find-team",  label: "Find Team",  icon: "👥" },
  { href: "/saved",      label: "Saved",      icon: "🔖" },
];

export default function Sidebar({ isOpen, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  const pathname = usePathname();

  return (
    <>
      {/* ── Backdrop overlay (mobile only) ── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* ── Sidebar panel ── */}
      <aside
        className={`
          fixed top-16 bottom-0 w-72 bg-white border-r border-navy-100 flex flex-col z-50 overflow-y-auto
          border-l-4 border-l-sky-400
          transition-transform duration-300 ease-in-out
          lg:left-0 lg:w-64 lg:translate-x-0 lg:border-l-0 lg:z-20
          ${isOpen ? "left-0 translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Close button — mobile only */}
        <button
          className="lg:hidden absolute top-3 right-3 p-1 rounded-full hover:bg-navy-50 transition-colors"
          onClick={onClose}
          aria-label="Close menu"
        >
          <svg className="w-5 h-5 text-navy-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* ── User profile summary ── */}
        <div className="p-5 border-b border-navy-100">
          <div className="flex items-center gap-3">
            <AvatarPlaceholder size="lg" />
            <div>
              <p className="font-semibold text-navy-700 text-sm">User Name</p>
              <p className="text-xs text-navy-400 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
                Teammate —
              </p>
            </div>
          </div>
        </div>

        {/* ── Active Team preview ── */}
        <div className="p-5 border-b border-navy-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-navy-700 uppercase tracking-wider">
              Your Active Team
            </h3>
            <Link href="/profile" className="text-xs text-navy-500 hover:text-navy-700 transition-colors">
              See All
            </Link>
          </div>
          <p className="text-xs text-navy-300 italic">No active team yet</p>
        </div>

        {/* ── Navigation links ── */}
        <nav className="flex-1 p-3" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-1 ${
                  isActive
                    ? "bg-navy-50 text-navy-700 border-l-4 border-navy-700"
                    : "text-navy-500 hover:bg-navy-50 hover:text-navy-700"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* ── Log out ── */}
        <div className="p-4 border-t border-navy-100">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Log out
          </button>
        </div>
      </aside>
    </>
  );
}
