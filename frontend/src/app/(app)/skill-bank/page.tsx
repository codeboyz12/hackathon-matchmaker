/**
 * Skill Bank page — matches Figma design.
 *
 * Sections:
 *  1. Rank Overall — ship icon, rank name (Gold/Silver/Bronze), progress bar
 *  2. Role Mastery — role names with mastery level
 *  3. Hard Skill — skill grid with icons and progress bars
 *  4. Soft Skill — star rating + per-role ratings
 *  5. Competitions — list of competition entries + "create +" button
 *
 * All data comes from the database via API — placeholders shown by default.
 */
export default function SkillBankPage() {
  // TODO: Fetch skill bank data from API
  // const skillData = await fetchSkillBank();

  return (
    <div className="space-y-8">
      {/* ═══════════════════════════════════════════
          Section 1: Rank Overall
          ═══════════════════════════════════════════ */}
      <section className="rounded-2xl border border-navy-100 bg-white p-8 text-center" aria-label="Overall rank">
        <h2 className="text-xl font-bold text-navy-700 mb-4">Rank Overall</h2>

        {/* Ship rank icon — TODO: replace with actual rank badge image from database */}
        <div className="mx-auto w-28 h-28 rounded-full bg-gradient-to-b from-amber-100 to-amber-300 border-4 border-amber-400 flex items-center justify-center mb-3">
          <span className="text-5xl">⛵</span>
        </div>

        {/* Rank name — TODO: from API (Gold, Silver, Bronze, etc.) */}
        <p className="text-2xl font-bold text-amber-500 mb-4">—</p>

        {/* Progress bar — TODO: set width dynamically based on user's XP progress */}
        <div className="max-w-xs mx-auto h-3 rounded-full bg-navy-100 overflow-hidden">
          <div
            className="h-full w-0 bg-gradient-to-r from-navy-500 to-amber-400 rounded-full transition-all"
            /* TODO: style={{ width: `${progressPercent}%` }} */
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Section 2: Role Mastery
          ═══════════════════════════════════════════ */}
      <section className="rounded-2xl border border-navy-100 bg-white p-6" aria-label="Role mastery">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-navy-700">Role mastery</h2>
          <button
            className="w-6 h-6 rounded-full bg-navy-100 text-navy-400 text-xs flex items-center justify-center"
            aria-label="Role mastery info"
          >
            ?
          </button>
        </div>

        {/* TODO: Render role mastery counts from API */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 rounded-xl bg-navy-50">
            <p className="text-xs text-navy-400 mb-1">Role Name</p>
            <p className="text-3xl font-bold text-navy-700">—</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-navy-50">
            <p className="text-xs text-navy-400 mb-1">Role Name</p>
            <p className="text-3xl font-bold text-navy-700">—</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Section 3: Hard Skill
          ═══════════════════════════════════════════ */}
      <section className="rounded-2xl border border-navy-100 bg-white p-6" aria-label="Hard skills">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-navy-700">Hard skill</h2>
          <button
            className="w-6 h-6 rounded-full bg-navy-100 text-navy-400 text-xs flex items-center justify-center"
            aria-label="Hard skill info"
          >
            ?
          </button>
        </div>

        {/* TODO: Render hard skills from API — each with icon, name, and level progress */}
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-navy-50">
              {/* Skill icon placeholder — TODO: replace with actual skill badge image */}
              <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0">
                <span className="text-lg">⛵</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-navy-700 truncate">Skill Name</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-1.5 rounded-full bg-navy-100 overflow-hidden">
                    <div className="h-full w-0 bg-navy-500 rounded-full" />
                  </div>
                  <span className="text-[10px] text-navy-400 whitespace-nowrap">— / —</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-navy-300 italic mt-4 text-center">
          Waiting for skill data from database
        </p>
      </section>

      {/* ═══════════════════════════════════════════
          Section 4: Soft Skill
          ═══════════════════════════════════════════ */}
      <section className="rounded-2xl border border-navy-100 bg-white p-6" aria-label="Soft skills">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-navy-700">Soft skill</h2>
          <button
            className="w-6 h-6 rounded-full bg-navy-100 text-navy-400 text-xs flex items-center justify-center"
            aria-label="Soft skill info"
          >
            ?
          </button>
        </div>

        <div className="flex items-center gap-8">
          {/* Overall star rating — TODO: from API */}
          <div className="text-center">
            <p className="text-5xl font-bold text-navy-700">—</p>
            <span className="text-3xl text-amber-400">★</span>
          </div>

          {/* Per-role soft skill ratings — TODO: from API */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-navy-50">
              <span className="text-sm text-navy-600">Role Name</span>
              <span className="text-sm font-bold text-navy-700">
                — / 5 <span className="text-amber-400">★</span>
              </span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-navy-50">
              <span className="text-sm text-navy-600">Role Name</span>
              <span className="text-sm font-bold text-navy-700">
                — / 5 <span className="text-amber-400">★</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Section 5: Competitions
          ═══════════════════════════════════════════ */}
      <section className="rounded-2xl border border-navy-100 bg-white p-6" aria-label="Competitions">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-navy-700">Competitions</h2>
          <button className="flex items-center gap-1 px-4 py-2 rounded-lg bg-navy-700 text-white text-xs font-semibold hover:bg-navy-600 transition-colors">
            create +
          </button>
        </div>

        {/*
          TODO: Render competition list from API.
          Each entry shows: name, award line, date range, member count.

          Example structure:
          <div className="flex items-center justify-between p-4 rounded-xl border border-navy-100">
            <div>
              <p className="font-semibold text-navy-700 text-sm">Pirate Hackathon</p>
              <p className="text-xs text-orange-500">รางวัล ไอเดียอันดับ 1</p>
              <p className="text-xs text-navy-400">10 May 2024 - 13 May 2024</p>
            </div>
            <span className="text-xs text-navy-400 flex items-center gap-1">👥 4 คน</span>
          </div>
        */}
        <div className="space-y-3">
          <p className="text-sm text-navy-300 italic text-center py-8">
            No competitions yet — create one or join a hackathon
          </p>
        </div>
      </section>
    </div>
  );
}
