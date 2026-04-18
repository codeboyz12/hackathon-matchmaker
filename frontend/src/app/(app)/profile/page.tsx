import Link from "next/link";
import AvatarPlaceholder from "@/components/shared/AvatarPlaceholder";
import MyRoleSection from "@/components/profile/MyRoleSection";
import SkillRankSection from "@/components/profile/SkillRankSection";
import CompetitionSection from "@/components/profile/CompetitionSection";

export default function ProfilePage() {
  return (
    <div className="flex flex-col w-full pb-10">
      {/* ═══════════════════════════════════════════
          Section 1: Cover Photo + Avatar
          ═══════════════════════════════════════════ */}
      <section className="relative px-6" aria-label="Cover photo and avatar">
        <div className="w-full h-48 sm:h-60 rounded-[2rem] bg-secondary/20 overflow-hidden relative border-2 border-primary/10">
          <div className="w-full h-full flex items-center justify-center text-primary/40 text-sm font-medium">
            Cover Photo — waiting for user upload
          </div>
        </div>

        <div className="absolute -bottom-14 left-14 p-1 bg-background rounded-full">
          <div className="rounded-full border-4 border-white shadow-lg overflow-hidden">
            <AvatarPlaceholder size="xl" />
          </div>
        </div>
      </section>

      {/* ส่วนเนื้อหาด้านล่างทั้งหมดจะยึดแนว px-6 เท่ากับ Cover Photo */}
      <div className="px-6 w-full flex flex-col mt-16 space-y-8">
        
        {/* ═══════════════════════════════════════════
            Section 2: User Info Header
            ═══════════════════════════════════════════ */}
        <section className="flex items-start justify-between w-full" aria-label="User information">
          <div className="text-left">
            <h1 className="text-3xl font-bold text-primary tracking-tight">Murchy D.Luffy</h1>
            <p className="text-base text-primary/60 flex items-center gap-1.5 mt-1 font-medium">
              <span className="flex items-center justify-center w-5 h-5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z" />
                </svg>
              </span>
              Teammate 30
            </p>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <Link
              href="/profile/edit"
              className="px-6 py-2 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-md active:scale-95"
            >
              edit profile
            </Link>
            <button
              className="p-2.5 rounded-full bg-gray-100 text-primary hover:bg-gray-200 transition-colors shadow-sm"
              aria-label="Share profile"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
            </button>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            Section 3: Bio
            ═══════════════════════════════════════════ */}
        <section className="w-full">
          <div className="rounded-3xl border-2 border-primary bg-white p-8 shadow-sm min-h-[100px] flex items-center justify-center text-center">
            <p className="text-primary font-normal">
              ฉันจะเป็นราชาโจรสลัดให้ได้เลย เหนียวโอ่ง เริดเลยหละ
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            Section 4 & 5: Details & Contact
            ═══════════════════════════════════════════ */}
        <div className="w-full space-y-8">
          <section className="space-y-4 text-left" aria-label="Personal details">
            <h2 className="text-xl font-bold text-primary uppercase tracking-wide">Personal details</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary font-medium">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                king mongkut's university of technology thonburi
              </li>
              <li className="flex items-center gap-3 text-primary font-medium">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                5 May 2005
              </li>
            </ul>
          </section>

          <section className="space-y-4 text-left" aria-label="Contact information">
            <h2 className="text-xl font-bold text-primary uppercase tracking-wide">contact</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary font-medium hover:underline cursor-pointer group">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                marchydluffy@gmail.com
              </li>
              <li className="flex items-center gap-3 text-primary font-medium hover:underline cursor-pointer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.79 1.102.79 2.222v3.293c0 .319.23.57.75.576 4.765-1.589 8.195-6.086 8.195-11.386 0-6.627-5.373-12-12-12" />
                </svg>
                github.com/marchydluffy
              </li>
            </ul>
          </section>
        </div>

        {/* ═══════════════════════════════════════════
            Section 6: ขีดคั่น + MY ROLE
            ═══════════════════════════════════════════ */}
        <div className="w-full">
          <hr className="my-10 border-t-2 border-primary/20" />
          <MyRoleSection />
        </div>

        <div className="w-full space-y-12">
          <SkillRankSection />
          <CompetitionSection />
        </div>
      </div>
    </div>
  );
}