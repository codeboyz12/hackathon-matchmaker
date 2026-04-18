"use client";

import { useState } from "react";
import Link from "next/link";
import TeamCard from "@/components/team/TeamCard";
import PersonCard from "@/components/team/PersonCard";

/**
 * Find Team page — matches Figma design.
 *
 * Layout:
 *  - Search bar + filter button + "create +" button
 *  - Role Tags filter panel (toggleable)
 *  - TEAM / PEOPLE tab toggle
 *  - Card list (TeamCard or PersonCard based on active tab)
 *
 * Data comes from the API — empty states shown by default.
 */

type ActiveTab = "team" | "people";

export default function FindTeamPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("team");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // TODO: Fetch teams and people from API based on searchQuery and filters
  const teams: never[] = [];
  const people: never[] = [];

  return (
    <div className="space-y-6">
      {/* ═══════════════════════════════════════════
          Search Bar + Filter + Create
          ═══════════════════════════════════════════ */}
      <div className="flex items-center gap-3">
        {/* Search input */}
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search teams or people..."
            className="w-full pl-10 pr-4 py-3 rounded-full border border-navy-200 bg-white text-navy-700 text-sm placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-400"
          />
        </div>

        {/* Filter toggle */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="p-3 rounded-full border border-navy-200 text-navy-500 hover:bg-navy-50 transition-colors"
          aria-label="Toggle filter panel"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
        </button>

        {/* Create team link */}
        <Link
          href="/find-team/create"
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-navy-700 text-white text-sm font-semibold hover:bg-navy-600 transition-colors whitespace-nowrap"
        >
          create +
        </Link>
      </div>

      {/* ═══════════════════════════════════════════
          Filter Panel (collapsible)
          ═══════════════════════════════════════════ */}
      {isFilterOpen && (
        <div className="rounded-2xl border border-navy-100 bg-white p-5">
          <h3 className="text-sm font-bold text-navy-700 flex items-center gap-2 mb-3">
            ⚙️ Role Tags
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {/* TODO: Make filter tags selectable — connect to search/filter API */}
            {["Leader", "Pitching", "Developer", "Business", "Marketing"].map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 rounded-full border border-navy-200 text-sm text-navy-600 hover:bg-navy-700 hover:text-white transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="flex justify-end">
            <button className="px-6 py-2 rounded-lg bg-navy-700 text-white text-sm font-medium hover:bg-navy-600 transition-colors">
              Done
            </button>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════
          Tab Toggle: TEAM / PEOPLE
          ═══════════════════════════════════════════ */}
      <div className="flex items-center justify-center">
        <button
          onClick={() => setActiveTab("team")}
          className={`px-8 py-2 rounded-l-full text-sm font-semibold transition-colors ${
            activeTab === "team"
              ? "bg-navy-700 text-white"
              : "bg-white border border-navy-200 text-navy-500 hover:bg-navy-50"
          }`}
        >
          TEAM
        </button>
        <button
          onClick={() => setActiveTab("people")}
          className={`px-8 py-2 rounded-r-full text-sm font-semibold transition-colors ${
            activeTab === "people"
              ? "bg-navy-700 text-white"
              : "bg-white border border-navy-200 text-navy-500 hover:bg-navy-50"
          }`}
        >
          PEOPLE
        </button>
      </div>

      {/* ═══════════════════════════════════════════
          Card List
          ═══════════════════════════════════════════ */}
      <section className="space-y-4" aria-label={activeTab === "team" ? "Team listings" : "People listings"}>
        {activeTab === "team" ? (
          teams.length > 0 ? (
            teams.map((_team, i) => <TeamCard key={i} />)
          ) : (
            <div className="text-center py-16">
              <p className="text-navy-300 text-sm">
                No teams found — waiting for data from API
              </p>
            </div>
          )
        ) : people.length > 0 ? (
          people.map((_person, i) => <PersonCard key={i} />)
        ) : (
          <div className="text-center py-16">
            <p className="text-navy-300 text-sm">
              No people found — waiting for data from API
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
