"use client";

import { useState } from "react";
import Link from "next/link";
import type { SignupPayload } from "@/types/auth";

/**
 * Sign Up page — GRAND LINE theme.
 * Form fields: display name, email, password, confirm password.
 * TODO: Connect to auth API endpoint for actual registration.
 */
export default function SignupPage() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Validate password match, then POST to /api/v1/auth/register
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const payload: SignupPayload = { displayName, email, password };
    console.log(payload);
  };

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-lg">
      <h1 className="text-2xl font-bold text-navy-700 text-center mb-2">Create Account</h1>
      <p className="text-sm text-navy-400 text-center mb-8">
        Join GrandLine and find your hackathon team
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Display Name */}
        <div>
          <label htmlFor="signup-name" className="block text-sm font-medium text-navy-600 mb-1">
            Display Name
          </label>
          <input
            id="signup-name"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-700 text-sm placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-400"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="signup-email" className="block text-sm font-medium text-navy-600 mb-1">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-700 text-sm placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-400"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="signup-password" className="block text-sm font-medium text-navy-600 mb-1">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-700 text-sm placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-400"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label htmlFor="signup-confirm" className="block text-sm font-medium text-navy-600 mb-1">
            Confirm Password
          </label>
          <input
            id="signup-confirm"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-700 text-sm placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-400"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-navy-700 text-white font-semibold hover:bg-navy-600 transition-colors"
        >
          Sign Up
        </button>
      </form>

      {/* Link to login */}
      <p className="mt-6 text-center text-sm text-navy-400">
        Already have an account?{" "}
        <Link href="/login" className="text-navy-700 font-semibold hover:underline">
          Log In
        </Link>
      </p>
    </div>
  );
}
