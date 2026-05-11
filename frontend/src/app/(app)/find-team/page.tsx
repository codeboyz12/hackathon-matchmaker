"use client";

import { useState } from "react";
import Link from "next/link";
import TeamCard, { TeamCardData } from "@/components/team/TeamCard";
import PersonCard from "@/components/team/PersonCard";

type ActiveTab = "team" | "people";

const mockTeams: TeamCardData[] = [
  {
    id: "1",
    avatarUrl: "https://i.pravatar.cc/150?u=1",
    title: "หาเพื่อนไป NSC",
    authorName: "Chanut Sunatho",
    dateRange: "10 May 2024 - 13 May 2034",
    daysLeft: 1,
    roles: ["Dev", "Lead"],
    skills: ["React", "Node", "SQL", "Manage"],
    currentMembers: 3,
    maxMembers: 4,
    memberAvatars: ["https://i.pravatar.cc/150?u=2", "https://i.pravatar.cc/150?u=3"],
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. We are looking for passionate individuals to join our project for NSC 2024.",
    detailedMembers: [
      { name: "Chanut Sunatho", avatar: "https://i.pravatar.cc/150?u=1", role: "Leader", score: 4.9 },
      { name: "Sompong Test", avatar: "https://i.pravatar.cc/150?u=2", role: "Developer", score: 4.2 },
      { name: "Alice Doe", avatar: "https://i.pravatar.cc/150?u=3", role: "Designer", score: 5.0 }
    ]
  },
  {
    id: "2",
    avatarUrl: "https://i.pravatar.cc/150?u=4",
    title: "หาเพื่อนไป NSC",
    authorName: "Chanut Sunatho",
    dateRange: "10 May 2024 - 13 May 2034",
    daysLeft: 2,
    roles: ["Pitch",],
    skills: ["Present", "Story", "Public"],
    currentMembers: 2,
    maxMembers: 4,
    memberAvatars: ["https://i.pravatar.cc/150?u=5", "https://i.pravatar.cc/150?u=6"],
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Our focus is heavily on storytelling and pitching our ideas effectively.",
    detailedMembers: [
      { name: "Chanut Sunatho", avatar: "https://i.pravatar.cc/150?u=4", role: "Speaker", score: 4.5 },
      { name: "Bob Smith", avatar: "https://i.pravatar.cc/150?u=5", role: "Pitching", score: 3.8 }
    ]
  },
  {
    id: "3",
    avatarUrl: "https://i.pravatar.cc/150?u=7",
    title: "หาเพื่อนไป NSC",
    authorName: "Chanut Sunatho",
    dateRange: "10 May 2024 - 13 May 2034",
    daysLeft: 2,
    roles: ["Dev", "Biz"],
    skills: ["Pitch", "Sales", "React"],
    currentMembers: 2,
    maxMembers: 4,
    memberAvatars: ["https://i.pravatar.cc/150?u=8", "https://i.pravatar.cc/150?u=9"],
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. We are building a robust backend system with a scalable architecture.",
    detailedMembers: [
      { name: "Chanut Sunatho", avatar: "https://i.pravatar.cc/150?u=7", role: "Dev", score: 4.7 },
      { name: "Jane Roe", avatar: "https://i.pravatar.cc/150?u=8", role: "Business", score: 4.1 }
    ]
  },
  {
    id: "4",
    avatarUrl: "https://i.pravatar.cc/150?u=10",
    title: "หาเพื่อนไป NSC",
    authorName: "Chanut Sunatho",
    dateRange: "10 May 2024 - 13 May 2034",
    daysLeft: 2,
    roles: ["MKT", "Dev"],
    skills: ["SEO", "Content", "Brand" , "Git", "API"],
    currentMembers: 1,
    maxMembers: 4,
    memberAvatars: ["https://i.pravatar.cc/150?u=11", "https://i.pravatar.cc/150?u=12"],
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Looking for creative marketers to skyrocket our user base.",
    detailedMembers: [
      { name: "Chanut Sunatho", avatar: "https://i.pravatar.cc/150?u=10", role: "Marketing", score: 5.0 }
    ]
  }
];

import type { PersonCardData } from "@/components/team/PersonCard";

const mockPeople: PersonCardData[] = [
  {
    id: "p1",
    name: "Chanut Sunatho",
    bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    avatarUrl: "https://i.pravatar.cc/150?u=1",
    roleTags: ["Dev", "Lead"],
    skillTags: ["React", "Tailwind", "Figma", "NodeJS", "UI/UX", "NextJS"],
    isFavorited: false,
  },
  {
    id: "p2",
    name: "Somchai JaiDee",
    bio: "Passionate about creating beautiful user experiences. I love storytelling and brand identity.",
    avatarUrl: "https://i.pravatar.cc/150?u=4",
    roleTags: ["Pitch", "Speaker"],
    skillTags: ["Present", "Story", "Public Speaking", "Figma"],
    isFavorited: true,
  },
  {
    id: "p3",
    name: "Alice Wonderland",
    bio: "Backend developer looking for a fun team to build scalable microservices.",
    avatarUrl: "https://i.pravatar.cc/150?u=7",
    roleTags: ["Dev", "Backend"],
    skillTags: ["Golang", "Docker", "AWS", "SQL", "Redis"],
    isFavorited: false,
  },
  {
    id: "p4",
    name: "John Smith",
    bio: "Growth hacker and marketing enthusiast. I can help your product reach thousands.",
    avatarUrl: "https://i.pravatar.cc/150?u=10",
    roleTags: ["Marketing", "Biz"],
    skillTags: ["SEO", "Content", "Ads", "Analytics", "Strategy"],
    isFavorited: false,
  }
];

export default function FindTeamPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("team");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // TODO: Fetch from API later
  const people = mockPeople;

  return (
    <div className="space-y-8 w-full">
      {/* ── Search Bar Row ── */}
      <div className="flex items-center gap-3 w-full">
        <div className="relative flex-1">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1b3168]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="w-full pl-12 pr-4 py-3 rounded-[1rem] border border-gray-200 bg-white text-gray-700 text-sm focus:outline-none focus:border-[#1b3168] shadow-sm placeholder:text-gray-400"
          />
        </div>

        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="p-3 bg-white rounded-[1rem] border border-gray-200 text-[#1b3168] hover:bg-gray-50 transition-colors shadow-sm shrink-0"
          aria-label="Toggle filter panel"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </button>

        <Link
          href="/find-team/create"
          className="flex items-center gap-2 px-6 py-3 rounded-[1rem] bg-[#1b3168] text-white text-sm font-bold hover:bg-[#12224f] transition-colors shadow-sm shrink-0 whitespace-nowrap"
        >
          create +
        </Link>
      </div>

      {/* ── Filter Panel (collapsible) ── */}
      {isFilterOpen && (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-bold text-[#1b3168] mb-3">Role Tags</h3>
          <div className="flex flex-wrap gap-2">
            {["Leader", "Pitching", "Developer", "Business", "Marketing"].map((tag) => (
              <button key={tag} className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:bg-[#1b3168] hover:text-white hover:border-[#1b3168] transition-colors font-semibold">
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Tabs ── */}
      <div className="flex justify-center w-full">
        <div className="flex bg-[#EAEAEA] rounded-xl p-1 shrink-0 w-full max-w-[280px]">
          <button
            onClick={() => setActiveTab("team")}
            className={`flex-1 py-2.5 rounded-lg text-xs font-black tracking-widest transition-all ${
              activeTab === "team" ? "bg-[#1b3168] text-white shadow-sm" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            TEAM
          </button>
          <button
            onClick={() => setActiveTab("people")}
            className={`flex-1 py-2.5 rounded-lg text-xs font-black tracking-widest transition-all ${
              activeTab === "people" ? "bg-[#1b3168] text-white shadow-sm" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            PEOPLE
          </button>
        </div>
      </div>

      {/* ── Card Grid ── */}
      <section aria-label={activeTab === "team" ? "Team listings" : "People listings"}>
        {activeTab === "team" ? (
          mockTeams.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-start">
              {mockTeams.map((team) => (
                <TeamCard key={team.id} data={team} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
              <p className="text-gray-400 font-semibold text-sm">No teams found</p>
            </div>
          )
        ) : people.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-start">
            {people.map((person) => <PersonCard key={person.id} data={person} />)}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
            <p className="text-gray-400 font-semibold text-sm">No people found</p>
          </div>
        )}
      </section>
    </div>
  );
}
