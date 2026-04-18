import type { ActiveTeam } from "@/types/profile";

/**
 * Active Team card — used on the profile page's ACTIVE TEAM section.
 * Cards only appear when the user has teams from the database.
 * If no active teams exist, this component won't render (parent handles empty state).
 */

interface ActiveTeamCardProps extends Partial<ActiveTeam> {}

const statusColorMap: Record<string, string> = {
  "กำลังประกาศ": "bg-orange-500 text-white",
  "กำลังร่วมทีม": "bg-yellow-500 text-white",
};

export default function ActiveTeamCard({
  teamName = "Team Name",
  dateRange = "",
  daysLeft,
  status = "",
  memberCount = "0/0",
}: ActiveTeamCardProps) {
  const statusClasses = statusColorMap[status] ?? "bg-navy-100 text-navy-600";

  return (
    <div className="rounded-xl border border-navy-100 bg-white p-4 hover:shadow-md transition-shadow">
      {/* Header: team name + days countdown */}
      <div className="flex items-start justify-between mb-2">
        <div>
          <h4 className="font-semibold text-navy-700 text-sm">{teamName}</h4>
          {dateRange && <p className="text-xs text-navy-400">{dateRange}</p>}
        </div>
        {daysLeft !== undefined && (
          <span className="text-xs font-bold text-navy-500">{daysLeft} วัน</span>
        )}
      </div>

      {/* Status badge + member count */}
      <div className="flex items-center justify-between">
        {status && (
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusClasses}`}>
            {status}
          </span>
        )}
        <span className="text-xs text-navy-400 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
          {memberCount}
        </span>
      </div>
    </div>
  );
}
