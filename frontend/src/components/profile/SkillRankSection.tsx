import type { SkillItem } from "@/types/profile";

/**
 * SKILL RANK section on the profile page.
 * Shows skill badges with rank icons (ship icons in Figma).
 * Skills come from the database — shows placeholder when empty.
 */

interface SkillRankSectionProps {
  skills?: SkillItem[];
}

export default function SkillRankSection({ skills = [] }: SkillRankSectionProps) {
  return (
    <section className="rounded-2xl border border-navy-100 bg-white p-6">
      <h2 className="flex items-center gap-2 text-lg font-bold text-navy-700 mb-4">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        SKILL RANK
      </h2>

      {skills.length > 0 ? (
        <div className="grid grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-2 p-3 rounded-xl bg-navy-50"
            >
              {/* TODO: Replace with actual skill rank badge image */}
              <div className="w-16 h-16 rounded-full bg-amber-100 border-2 border-amber-300 flex items-center justify-center">
                {skill.iconUrl ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={skill.iconUrl} alt={skill.name} className="w-12 h-12 object-contain" />
                ) : (
                  <span className="text-2xl">⛵</span>
                )}
              </div>
              <span className="text-xs font-medium text-navy-700 text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-navy-300 italic">
          No skills ranked yet — waiting for user data
        </p>
      )}
    </section>
  );
}
