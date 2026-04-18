/**
 * Reusable tag badge for Role Tags and Skill Tags.
 * `variant` controls the colour scheme; `selected` toggles filled/outline.
 */

interface TagBadgeProps {
  label: string;
  variant?: "role" | "skill" | "outline";
  selected?: boolean;
}

export default function TagBadge({ label, variant = "outline", selected = false }: TagBadgeProps) {
  const base =
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-colors";

  const styles = selected
    ? "bg-navy-700 text-white border-navy-700"
    : variant === "role"
      ? "bg-white text-navy-700 border-navy-200 hover:border-navy-400"
      : variant === "skill"
        ? "bg-white text-navy-700 border-navy-200 hover:border-navy-400"
        : "bg-white text-navy-600 border-navy-200 hover:border-navy-400";

  return <span className={`${base} ${styles}`}>{label}</span>;
}
