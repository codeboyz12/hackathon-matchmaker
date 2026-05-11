import React from "react";
import ActiveTeamCard from "./ActiveTeamCard";

export interface ActiveTeam {
  teamName: string;
  dateRange: string;
  daysLeft: number;
  status: string;
  memberCount: string;
  hasNotification?: boolean;
}

interface ActiveTeamSectionProps {
  teams?: ActiveTeam[];
}

export default function ActiveTeamSection({ teams = [] }: ActiveTeamSectionProps) {
  return (
    <section className="relative w-full pt-16 pb-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="bg-white border border-gray-200 px-8 py-2.5 rounded-full flex items-center gap-2 shadow-sm text-[#1b3168] font-bold text-sm tracking-widest uppercase">
          <span className="text-[#1b3168]">👥</span>
          ACTIVE TEAM
        </div>
      </div>

      {teams.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-4">
          {teams.map((team, idx) => (
            <ActiveTeamCard key={idx} {...team} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[140px] border border-dashed border-gray-300 rounded-[2rem] bg-gray-50 mt-4">
          <p className="text-sm font-medium text-gray-400 italic">
            No active teams at the moment.
          </p>
        </div>
      )}
    </section>
  );
}
