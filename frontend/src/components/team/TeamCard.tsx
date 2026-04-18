import type { TeamCardData } from "@/types/team";
import AvatarPlaceholder from "@/components/shared/AvatarPlaceholder";
import TagBadge from "@/components/shared/TagBadge";

/**
 * Team listing card — used on the Find Team page (TEAM tab).
 * Shows team name, creator, date, countdown, role/skill tags, member count, and REQUEST button.
 *
 * All data comes from the API — this component is purely presentational.
 */

export interface TeamCardProps extends Partial<TeamCardData> {
  onRequest?: () => void;
}

export default function TeamCard({
  teamName = "Team Name",
  creatorName = "Creator",
  dateRange = "",
  daysLeft,
  roleTags = [],
  skillTags = [],
  currentMembers = 0,
  maxMembers = 0,
  memberAvatarUrls = [],
  onRequest,
}: TeamCardProps) {
  return (
    <article className="rounded-2xl border border-navy-100 bg-white p-5 hover:shadow-md transition-shadow">
      {/* ── Header: creator info + countdown ── */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <AvatarPlaceholder size="md" />
          <div>
            <h3 className="font-bold text-navy-700">{teamName}</h3>
            <p className="text-xs text-navy-400">{creatorName}</p>
            {dateRange && <p className="text-xs text-navy-300">{dateRange}</p>}
          </div>
        </div>

        {daysLeft !== undefined && (
          <div className="flex items-center gap-1 text-navy-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm font-bold">{daysLeft} วัน</span>
          </div>
        )}
      </div>

      {/* ── Role & Skill Tags ── */}
      <div className="flex flex-wrap gap-4 mb-4">
        {roleTags.length > 0 && (
          <div>
            <span className="text-xs font-semibold text-navy-600 flex items-center gap-1 mb-1">
              ⚙️ Role Tag
            </span>
            <div className="flex flex-wrap gap-1">
              {roleTags.map((tag) => (
                <TagBadge key={tag} label={tag} variant="role" />
              ))}
            </div>
          </div>
        )}
        {skillTags.length > 0 && (
          <div>
            <span className="text-xs font-semibold text-navy-600 flex items-center gap-1 mb-1">
              ⚙️ Skill Tag
            </span>
            <div className="flex flex-wrap gap-1">
              {skillTags.map((tag) => (
                <TagBadge key={tag} label={tag} variant="skill" />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Member count + actions ── */}
      <div className="flex items-center justify-between pt-3 border-t border-navy-50">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-navy-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z" />
          </svg>
          <span className="text-sm font-medium text-navy-600">
            {currentMembers}/{maxMembers}
          </span>
          {/* Member avatar stack */}
          <div className="flex -space-x-2">
            {memberAvatarUrls.slice(0, 3).map((url, i) => (
              <AvatarPlaceholder key={i} size="sm" src={url} />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Expand/collapse — TODO: wire to expand card details */}
          <button
            className="text-navy-400 hover:text-navy-600 transition-colors"
            aria-label="Expand details"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <button
            onClick={onRequest}
            className="px-4 py-2 rounded-lg bg-navy-700 text-white text-xs font-semibold hover:bg-navy-600 transition-colors"
          >
            REQUEST
          </button>
        </div>
      </div>
    </article>
  );
}
