import type { CompetitionItem } from "@/types/profile";

/**
 * COMPETITION section on the profile page.
 * Shows a timeline of hackathon competitions over an ocean-themed background.
 *
 * Background: The Figma design uses a water/ocean image. This is a placeholder —
 * the actual background image will be provided by the team later.
 * Use: style={{ backgroundImage: "url('/competition-bg.png')" }}
 */

interface CompetitionSectionProps {
  competitions?: CompetitionItem[];
}

export default function CompetitionSection({ competitions = [] }: CompetitionSectionProps) {
  return (
    <section className="rounded-2xl border border-navy-100 overflow-hidden">
      {/* Section header */}
      <div className="bg-white px-6 py-4 border-b border-navy-100">
        <h2 className="flex items-center gap-2 text-lg font-bold text-navy-700">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z" />
          </svg>
          COMPETITION
        </h2>
      </div>

      {/*
        Background area — TODO: Replace gradient with actual ocean background image.
        Friend will provide the asset. Set via:
          style={{ backgroundImage: "url('/images/competition-ocean-bg.png')" }}
      */}
      <div
        className="relative min-h-[400px] bg-gradient-to-b from-sky-100 to-sky-200 p-6"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {competitions.length > 0 ? (
          <div className="relative flex flex-col items-center gap-8">
            {/* Dashed timeline line */}
            <div className="absolute top-0 bottom-0 left-1/2 border-l-2 border-dashed border-navy-400" />

            {competitions.map((comp, index) => (
              <div
                key={`${comp.name}-${index}`}
                className={`relative z-10 flex items-center gap-3 ${
                  index % 2 === 0 ? "self-start" : "self-end"
                }`}
              >
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 shadow-sm">
                  <p className="font-semibold text-navy-700 text-sm">{comp.name}</p>
                  <p className="text-xs text-navy-400">{comp.date}</p>
                </div>
                {/* TODO: Competition ship/icon image */}
                <span className="text-xl">⛵</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full min-h-[300px]">
            <p className="text-sm text-navy-500 bg-white/70 backdrop-blur rounded-lg px-6 py-3">
              No competitions yet — join a hackathon to start your journey!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
