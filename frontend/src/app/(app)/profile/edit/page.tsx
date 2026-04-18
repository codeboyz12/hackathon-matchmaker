"use client";

import { useState } from "react";
import Link from "next/link";
import AvatarPlaceholder from "@/components/shared/AvatarPlaceholder";
import type { UserProfile } from "@/types/profile";

/**
 * Edit Profile page — form fields match the profile view sections.
 * Fields: avatar, cover photo, display name, bio, university, birthday,
 *         email, GitHub, LinkedIn, roles.
 */

const availableRoles = [
  "Frontend Dev",
  "Backend Dev",
  "AI Engineer",
  "Data Engineer",
  "UX/UI Designer",
  "DevOps",
  "Mobile Dev",
  "Project Manager",
];

export default function EditProfilePage() {
  const [form, setForm] = useState<Partial<UserProfile>>({
    displayName: "",
    bio: "",
    university: "",
    birthday: "",
    email: "",
    githubUrl: "",
    linkedinUrl: "",
    roles: [],
  });

  const handleChange = (field: keyof UserProfile, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleRole = (role: string) => {
    setForm((prev) => {
      const current = prev.roles ?? [];
      return {
        ...prev,
        roles: current.includes(role) ? current.filter((r) => r !== role) : [...current, role],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send to API
    console.log("Save profile:", form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      {/* ── Header ── */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-navy-700">Edit Profile</h1>
        <Link
          href="/profile"
          className="text-sm text-navy-500 hover:text-navy-700 transition-colors"
        >
          ← Back to Profile
        </Link>
      </div>

      {/* ── Cover Photo ── */}
      <section className="space-y-2">
        <label className="text-sm font-semibold text-navy-600">Cover Photo</label>
        <div className="w-full h-40 rounded-2xl bg-gradient-to-r from-navy-100 to-sky-100 flex items-center justify-center border-2 border-dashed border-navy-200 cursor-pointer hover:border-navy-400 transition-colors">
          <span className="text-sm text-navy-400">Click to upload cover photo</span>
        </div>
      </section>

      {/* ── Avatar ── */}
      <section className="flex items-center gap-4">
        <AvatarPlaceholder size="xl" />
        <div>
          <button
            type="button"
            className="px-4 py-2 rounded-lg border border-navy-200 text-sm text-navy-600 hover:bg-navy-50 transition-colors"
          >
            Change Avatar
          </button>
          <p className="text-xs text-navy-400 mt-1">JPG, PNG. Max 2MB.</p>
        </div>
      </section>

      {/* ── Display Name ── */}
      <section className="space-y-1">
        <label htmlFor="displayName" className="text-sm font-semibold text-navy-600">
          Display Name
        </label>
        <input
          id="displayName"
          type="text"
          value={form.displayName ?? ""}
          onChange={(e) => handleChange("displayName", e.target.value)}
          placeholder="Your display name"
          className="w-full px-4 py-2.5 rounded-lg border border-navy-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
        />
      </section>

      {/* ── Bio ── */}
      <section className="space-y-1">
        <label htmlFor="bio" className="text-sm font-semibold text-navy-600">
          Bio
        </label>
        <textarea
          id="bio"
          rows={3}
          value={form.bio ?? ""}
          onChange={(e) => handleChange("bio", e.target.value)}
          placeholder="Write something about yourself..."
          className="w-full px-4 py-2.5 rounded-lg border border-navy-200 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
        />
      </section>

      {/* ── University ── */}
      <section className="space-y-1">
        <label htmlFor="university" className="text-sm font-semibold text-navy-600">
          University
        </label>
        <input
          id="university"
          type="text"
          value={form.university ?? ""}
          onChange={(e) => handleChange("university", e.target.value)}
          placeholder="e.g. King Mongkut's University of Technology Thonburi"
          className="w-full px-4 py-2.5 rounded-lg border border-navy-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
        />
      </section>

      {/* ── Birthday ── */}
      <section className="space-y-1">
        <label htmlFor="birthday" className="text-sm font-semibold text-navy-600">
          Birthday
        </label>
        <input
          id="birthday"
          type="date"
          value={form.birthday ?? ""}
          onChange={(e) => handleChange("birthday", e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-navy-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
        />
      </section>

      {/* ── Contact: Email ── */}
      <section className="space-y-1">
        <label htmlFor="email" className="text-sm font-semibold text-navy-600">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email ?? ""}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-2.5 rounded-lg border border-navy-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
        />
      </section>

      {/* ── Contact: GitHub ── */}
      <section className="space-y-1">
        <label htmlFor="github" className="text-sm font-semibold text-navy-600">
          GitHub
        </label>
        <input
          id="github"
          type="url"
          value={form.githubUrl ?? ""}
          onChange={(e) => handleChange("githubUrl", e.target.value)}
          placeholder="https://github.com/username"
          className="w-full px-4 py-2.5 rounded-lg border border-navy-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
        />
      </section>

      {/* ── Contact: LinkedIn ── */}
      <section className="space-y-1">
        <label htmlFor="linkedin" className="text-sm font-semibold text-navy-600">
          LinkedIn
        </label>
        <input
          id="linkedin"
          type="url"
          value={form.linkedinUrl ?? ""}
          onChange={(e) => handleChange("linkedinUrl", e.target.value)}
          placeholder="https://linkedin.com/in/username"
          className="w-full px-4 py-2.5 rounded-lg border border-navy-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
        />
      </section>

      {/* ── My Roles ── */}
      <section className="space-y-2">
        <label className="text-sm font-semibold text-navy-600">My Roles</label>
        <div className="flex flex-wrap gap-2">
          {availableRoles.map((role) => {
            const selected = form.roles?.includes(role);
            return (
              <button
                key={role}
                type="button"
                onClick={() => toggleRole(role)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  selected
                    ? "bg-navy-700 text-white border-navy-700"
                    : "bg-white text-navy-600 border-navy-200 hover:border-navy-400"
                }`}
              >
                {role}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Submit ── */}
      <div className="flex items-center gap-3 pt-4">
        <button
          type="submit"
          className="px-6 py-2.5 rounded-lg bg-navy-700 text-white text-sm font-semibold hover:bg-navy-600 transition-colors"
        >
          Save Changes
        </button>
        <Link
          href="/profile"
          className="px-6 py-2.5 rounded-lg border border-navy-200 text-sm text-navy-600 hover:bg-navy-50 transition-colors"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
