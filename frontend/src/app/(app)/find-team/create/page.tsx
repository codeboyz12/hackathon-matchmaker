"use client";

import { useState } from "react";
import Link from "next/link";
import type { CreateTeamPayload } from "@/types/team";

/**
 * Create Team form page — matches Figma design.
 *
 * Fields:
 *  - หัวข้อ (Title)
 *  - รายละเอียดเพิ่มเติม (Details)
 *  - วันที่เวลา (Event Date/Time)
 *  - ระยะเวลารับสมัคร (Duration in days)
 *  - จำนวนสมาชิกที่ต้องการ (Member count)
 *  - ตำแหน่งที่ต้องการ (Roles) — tag input
 *  - ทักษะที่ต้องการ (Skills) — tag input
 *  - เพิ่มสมาชิก (Invite members) — placeholder for user search
 *  - Action buttons: ยกเลิก / โพสต์ประกาศ
 *
 * Form submits to the API — currently logs to console.
 */
export default function CreateTeamPage() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [durationDays, setDurationDays] = useState("");
  const [memberCount, setMemberCount] = useState("");

  /* ── Role tag input ── */
  const [roleInput, setRoleInput] = useState("");
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const addRole = () => {
    const trimmed = roleInput.trim();
    if (trimmed && !selectedRoles.includes(trimmed)) {
      setSelectedRoles([...selectedRoles, trimmed]);
      setRoleInput("");
    }
  };

  const removeRole = (role: string) => {
    setSelectedRoles(selectedRoles.filter((r) => r !== role));
  };

  /* ── Skill tag input ── */
  const [skillInput, setSkillInput] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !selectedSkills.includes(trimmed)) {
      setSelectedSkills([...selectedSkills, trimmed]);
      setSkillInput("");
    }
  };

  const removeSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  /* ── Form submission ── */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: POST to /api/v1/teams — create team via backend API
    const payload: CreateTeamPayload = {
      title,
      details,
      eventDate,
      durationDays: Number(durationDays),
      memberCount: Number(memberCount),
      roles: selectedRoles,
      skills: selectedSkills,
    };
    console.log(payload);
  };

  return (
    <div className="max-w-xl mx-auto">
      {/* Back link */}
      <div className="mb-6">
        <Link
          href="/find-team"
          className="text-navy-400 hover:text-navy-700 transition-colors text-sm"
        >
          &lt; ย้อนกลับ
        </Link>
      </div>

      <h1 className="text-2xl font-bold text-navy-700 text-center mb-8">สร้างทีม</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ── Title ── */}
        <div>
          <label htmlFor="team-title" className="block text-sm font-semibold text-navy-700 mb-1">
            หัวข้อ (Title)
          </label>
          <input
            id="team-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="ระบุหัวข้อประกาศ"
            className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-700 text-sm placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-400"
          />
        </div>

        {/* ── Details ── */}
        <div>
          <label htmlFor="team-details" className="block text-sm font-semibold text-navy-700 mb-1">
            รายละเอียดเพิ่มเติม (Details)
          </label>
          <textarea
            id="team-details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="อธิบายเพิ่มเติม"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-700 text-sm placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-400 resize-none"
          />
        </div>

        {/* ── Event Date ── */}
        <div>
          <label htmlFor="event-date" className="block text-sm font-semibold text-navy-700 mb-1">
            วันที่เวลา (Event Date/Time)
          </label>
          <input
            id="event-date"
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-700 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400"
          />
        </div>

        {/* ── Duration ── */}
        <div>
          <label htmlFor="duration" className="block text-sm font-semibold text-navy-700 mb-1">
            ระยะเวลารับสมัคร (วัน)
          </label>
          <input
            id="duration"
            type="number"
            min={1}
            value={durationDays}
            onChange={(e) => setDurationDays(e.target.value)}
            placeholder="เช่น 3"
            className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-700 text-sm placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-400"
          />
        </div>

        {/* ── Member Count ── */}
        <div>
          <label htmlFor="member-count" className="block text-sm font-semibold text-navy-700 mb-1">
            จำนวนสมาชิกที่ต้องการ (Members)
          </label>
          <div className="flex items-center gap-2">
            <input
              id="member-count"
              type="number"
              min={1}
              value={memberCount}
              onChange={(e) => setMemberCount(e.target.value)}
              placeholder="ระบุจำนวนสมาชิก"
              className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-700 text-sm placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-400"
            />
            <svg className="w-6 h-6 text-navy-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z" />
            </svg>
          </div>
        </div>

        {/* ── Roles (tag input) ── */}
        <div>
          <label htmlFor="role-input" className="block text-sm font-semibold text-navy-700 mb-1">
            ตำแหน่งที่ต้องการ (Role)
          </label>
          <div className="flex items-center gap-2 mb-2">
            <input
              id="role-input"
              type="text"
              value={roleInput}
              onChange={(e) => setRoleInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addRole();
                }
              }}
              placeholder="เช่น Data, Frontend"
              className="flex-1 px-4 py-3 rounded-xl border border-navy-200 text-navy-700 text-sm placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-400"
            />
            <button
              type="button"
              onClick={addRole}
              className="p-3 rounded-xl bg-navy-700 text-white hover:bg-navy-600 transition-colors"
              aria-label="Add role"
            >
              +
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedRoles.map((role) => (
              <span
                key={role}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-navy-700 text-white text-xs"
              >
                {role}
                <button
                  type="button"
                  onClick={() => removeRole(role)}
                  className="ml-1 hover:text-red-300"
                  aria-label={`Remove ${role}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* ── Skills (tag input) ── */}
        <div>
          <label htmlFor="skill-input" className="block text-sm font-semibold text-navy-700 mb-1">
            ทักษะที่ต้องการ (Skill)
          </label>
          <div className="flex items-center gap-2 mb-2">
            <input
              id="skill-input"
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addSkill();
                }
              }}
              placeholder="เช่น Python"
              className="flex-1 px-4 py-3 rounded-xl border border-navy-200 text-navy-700 text-sm placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-400"
            />
            <button
              type="button"
              onClick={addSkill}
              className="p-3 rounded-xl bg-navy-700 text-white hover:bg-navy-600 transition-colors"
              aria-label="Add skill"
            >
              +
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-navy-700 text-white text-xs"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => removeSkill(skill)}
                  className="ml-1 hover:text-red-300"
                  aria-label={`Remove ${skill}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* ── Invite Members placeholder ── */}
        <div className="rounded-xl border border-dashed border-navy-200 p-4">
          <p className="text-sm font-semibold text-navy-700 mb-1">
            เพิ่มสมาชิกเพื่อเข้าร่วมทีมและมอบหมาย Role
          </p>
          <p className="text-xs text-navy-400">
            TODO: Connect to user search API — allow inviting members by name and assigning roles
          </p>
        </div>

        {/* ── Action Buttons ── */}
        <div className="flex items-center justify-end gap-3 pt-4">
          <Link
            href="/find-team"
            className="px-6 py-3 rounded-xl border border-navy-200 text-navy-600 text-sm font-medium hover:bg-navy-50 transition-colors"
          >
            ยกเลิก
          </Link>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-navy-700 text-white text-sm font-semibold hover:bg-navy-600 transition-colors"
          >
            โพสต์ประกาศ
          </button>
        </div>
      </form>
    </div>
  );
}
