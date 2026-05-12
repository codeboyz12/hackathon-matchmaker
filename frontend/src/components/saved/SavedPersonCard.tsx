"use client";

import Link from "next/link";
import type { User } from "@/data/mockData";

interface SavedPersonCardProps {
  user: User;
  teammateCount: number;
  onUnsaveClick: () => void;
}

export default function SavedPersonCard({ user, teammateCount, onUnsaveClick }: SavedPersonCardProps) {

  return (
    <Link
      href={`/profile/${user.id}`}
      className="group block bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow h-fit"
    >
      {/* ── Cover Image ── */}
      <div className="relative w-full h-28 bg-gradient-to-r from-[#1b3168] to-[#3b5baa] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={user.coverImage}
          alt=""
          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* ── Bottom Info Section ── */}
      <div className="relative px-5 pb-5 pt-2">
        {/* Overlapping Avatar */}
        <div className="absolute -top-8 left-5">
          <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-white shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Info Row — Name + Bookmark button on same horizontal line */}
        <div className="mt-10">
          <div className="flex items-start justify-between gap-2">
            {/* Left: Name & Teammate count */}
            <div className="min-w-0">
              <h3 className="font-extrabold text-[#1b3168] text-base leading-tight truncate">
                {user.name}
              </h3>
              <p className="text-gray-500 text-xs font-semibold flex items-center gap-1 mt-1">
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Teammate {teammateCount}
              </p>
            </div>

            {/* Right: Minimalist Bookmark icon — Solid when saved, outlined when not */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onUnsaveClick();
              }}
              className="shrink-0 p-1 mt-0.5 hover:opacity-70 transition-opacity active:scale-90"
              aria-label={`Remove ${user.name} from saved`}
            >
              {/* Always solid navy — cards on /saved are always in saved state */}
              <svg className="w-6 h-6 text-[#1b3168]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
