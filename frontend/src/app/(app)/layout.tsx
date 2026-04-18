"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

/**
 * Shared layout for all authenticated app pages.
 * Desktop: fixed sidebar left + main content offset. Mobile: hamburger opens drawer overlay.
 */
export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="light-theme min-h-screen relative isolate" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <Header onMenuToggle={() => setSidebarOpen((v) => !v)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content — offset by sidebar on desktop (lg+), full-width on mobile */}
      <main className="lg:ml-64 min-h-[calc(100vh-4rem)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">{children}</div>
        <Footer />
      </main>
    </div>
  );
}
