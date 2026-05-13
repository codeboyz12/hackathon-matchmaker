import React from "react";
import { AnchorIcon } from "@/components/Icons";

export interface CompetitionItem {
  name: string;
  date: string;
}

interface CompetitionSectionProps {
  competitions?: CompetitionItem[];
}

export default function CompetitionSection({ competitions = [] }: CompetitionSectionProps) {
  return (
    <section className="relative rounded-[2rem] border border-gray-200 bg-[#cceaff] p-8 sm:p-12 pt-16 w-full shadow-sm mt-8">
      {/* Absolute centered title pill overlapping top border */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white border border-gray-200 px-8 py-2.5 rounded-full flex items-center gap-2 shadow-sm text-[#1b3168] font-bold text-sm tracking-widest uppercase">
        <AnchorIcon className="w-4 h-4 text-[#1b3168]" />
        COMPETITION
      </div>

      <div className="relative w-full max-w-3xl mx-auto py-8 min-h-[300px]">
        {/* Vertical Dashed Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[3px] border-l-[3px] border-dashed border-[#1b3168]/60 -translate-x-1/2"></div>

        {competitions.length > 0 ? (
          <div className="flex flex-col gap-16 relative w-full">
            {competitions.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center w-full">
                  {/* Icon on the line */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-[#cceaff] z-10">
                    {index === 0 ? (
                      <span className="text-[#1b3168] text-2xl">⛵</span>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-[#1b3168]"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`w-1/2 flex flex-col ${isLeft ? 'items-end pr-8 sm:pr-16 text-right' : 'items-start pl-8 sm:pl-16 ml-auto text-left'}`}>
                    <h4 className="font-extrabold text-[#1b3168] text-lg sm:text-xl">{event.name}</h4>
                    <p className="text-xs sm:text-sm font-bold text-[#1b3168]/70 mt-1">{event.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full pt-10">
            <p className="text-sm font-medium text-[#1b3168]/60 italic bg-white/50 px-6 py-2 rounded-full">
              No competitions charted yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
