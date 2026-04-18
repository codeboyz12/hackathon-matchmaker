import TagBadge from "@/components/shared/TagBadge";

/**
 * MY ROLE section on the profile page.
 * Displays the user's selected roles (e.g. Frontend Dev, Backend Dev).
 * Roles come from the database — shows placeholder when empty.
 */

interface MyRoleSectionProps {
  /** List of role names — leave empty to show placeholder */
  roles?: string[];
}

export default function MyRoleSection({ roles = [] }: MyRoleSectionProps) {
  return (
    <section className="rounded-2xl border border-navy-100 bg-white p-6">
      <h2 className="flex items-center gap-2 text-lg font-bold text-navy-700 mb-4">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
        MY ROLE
      </h2>

      {roles.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {roles.map((role) => (
            <TagBadge key={role} label={role} variant="role" selected />
          ))}
        </div>
      ) : (
        <p className="text-sm text-navy-300 italic">
          No roles added yet — waiting for user data
        </p>
      )}
    </section>
  );
}
