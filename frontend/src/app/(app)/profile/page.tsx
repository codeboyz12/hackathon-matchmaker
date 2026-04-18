import Link from "next/link";
import AvatarPlaceholder from "@/components/shared/AvatarPlaceholder";
import MyRoleSection from "@/components/profile/MyRoleSection";
import SkillRankSection from "@/components/profile/SkillRankSection";
import CompetitionSection from "@/components/profile/CompetitionSection";

/**
 * Profile page — matches Figma design.
 *
 * Sections:
 *  1. Cover photo + avatar
 *  2. User info (name, edit profile, share)
 *  3. Bio
 *  4. Personal details
 *  5. Contact
 *  6. MY ROLE
 *  7. SKILL RANK
 *  8. COMPETITION (placeholder background — friend provides ocean image)
 *  9. ACTIVE TEAM (cards appear only when database has teams)
 *
 * All user data fields are left blank (placeholder) — waiting for API / database.
 */
export default function ProfilePage() {
  // TODO: Fetch user profile data from API
  // const profile = await fetchProfile();

  return (
    <div className="space-y-6">
      {/* ═══════════════════════════════════════════
          Section 1: Cover Photo + Avatar
          ═══════════════════════════════════════════ */}
      <section className="relative" aria-label="Cover photo and avatar">
        {/* Cover photo placeholder — TODO: replace with user's uploaded cover image */}
        <div className="w-full h-48 rounded-2xl bg-gradient-to-r from-navy-200 to-sky-200 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-navy-300 text-sm">
            Cover Photo — waiting for user upload
          </div>
        </div>

        {/* Avatar overlapping bottom-left of the cover */}
        <div className="absolute -bottom-12 left-6">
          <AvatarPlaceholder size="xl" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Section 2: User Info Header
          ═══════════════════════════════════════════ */}
      <section className="pt-14 px-1 flex items-start justify-between" aria-label="User information">
        <div>
          {/* TODO: User name from API */}
          <h1 className="text-2xl font-bold text-navy-700">User Name</h1>
          <p className="text-sm text-navy-400 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z" />
            </svg>
            Teammate —
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/profile/edit"
            className="px-4 py-2 rounded-lg bg-navy-700 text-white text-sm font-medium hover:bg-navy-600 transition-colors"
          >
            Edit Profile
          </Link>
          <button
            className="p-2 rounded-lg border border-navy-200 text-navy-500 hover:bg-navy-50 transition-colors"
            aria-label="Share profile"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Section 3: Bio
          ═══════════════════════════════════════════ */}
      <section className="rounded-2xl border border-navy-100 bg-white p-5" aria-label="Bio">
        {/* TODO: Display user's bio from API */}
        <p className="text-sm text-navy-400 italic">Bio — waiting for user to write</p>
      </section>

      {/* ═══════════════════════════════════════════
          Section 4: Personal Details
          ═══════════════════════════════════════════ */}
      <section className="space-y-3 px-1" aria-label="Personal details">
        <h2 className="font-bold text-navy-700">Personal details</h2>
        <ul className="space-y-2 text-sm text-navy-500">
          {/* University */}
          <li className="flex items-center gap-2">
            <svg className="w-4 h-4 text-navy-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z" />
            </svg>
            <span className="text-navy-300 italic">University — waiting for data</span>
          </li>
          {/* Birthday */}
          <li className="flex items-center gap-2">
            <svg className="w-4 h-4 text-navy-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
            </svg>
            <span className="text-navy-300 italic">Birthday — waiting for data</span>
          </li>
        </ul>
      </section>

      {/* ═══════════════════════════════════════════
          Section 5: Contact
          ═══════════════════════════════════════════ */}
      <section className="space-y-3 px-1" aria-label="Contact information">
        <h2 className="font-bold text-navy-700">Contact</h2>
        <ul className="space-y-2 text-sm text-navy-500">
          {/* Email */}
          <li className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span className="text-navy-300 italic">Email — waiting for data</span>
          </li>
          {/* GitHub */}
          <li className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-navy-300 italic">GitHub — waiting for data</span>
          </li>
          {/* LinkedIn */}
          <li className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span className="text-navy-300 italic">LinkedIn — waiting for data</span>
          </li>
        </ul>
      </section>

      {/* ═══════════════════════════════════════════
          Section 6: MY ROLE
          ═══════════════════════════════════════════ */}
      <MyRoleSection />

      {/* ═══════════════════════════════════════════
          Section 7: SKILL RANK
          ═══════════════════════════════════════════ */}
      <SkillRankSection />

      {/* ═══════════════════════════════════════════
          Section 8: COMPETITION
          ═══════════════════════════════════════════ */}
      <CompetitionSection />

      {/* ═══════════════════════════════════════════
          Section 9: ACTIVE TEAM
          Cards only appear when user has active teams in the database.
          ═══════════════════════════════════════════ */}
      <section className="space-y-4" aria-label="Active teams">
        <h2 className="flex items-center gap-2 text-lg font-bold text-navy-700">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z" />
          </svg>
          ACTIVE TEAM
        </h2>

        {/*
          TODO: Fetch active teams from API and render ActiveTeamCard here.
          Cards only show when user has joined or created teams.

          Example usage:
          import ActiveTeamCard from "@/components/profile/ActiveTeamCard";

          <ActiveTeamCard
            teamName="Pirate Hackathon"
            dateRange="10 May 2024 - 13 May 2024"
            daysLeft={4}
            status="กำลังประกาศ"
            memberCount="3/4"
          />
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p className="text-sm text-navy-300 italic col-span-full text-center py-8">
            No active teams — join or create a team to see them here
          </p>
        </div>
      </section>
    </div>
  );
}
