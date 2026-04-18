import type { PersonCardData } from "@/types/team";
import AvatarPlaceholder from "@/components/shared/AvatarPlaceholder";
import TagBadge from "@/components/shared/TagBadge";

/**
 * Person listing card — used on the Find Team page (PEOPLE tab).
 * Shows person's name, bio, role/skill tags, and an "Add to Favorite" button.
 *
 * All data comes from the API — this component is purely presentational.
 */

export interface PersonCardProps extends Partial<PersonCardData> {
  onToggleFavorite?: () => void;
}

export default function PersonCard({
  name = "User Name",
  bio = "",
  roleTags = [],
  skillTags = [],
  isFavorited = false,
  onToggleFavorite,
}: PersonCardProps) {
  return (
    <article className="rounded-2xl border border-navy-100 bg-white p-5 hover:shadow-md transition-shadow">
      {/* ── User info ── */}
      <div className="flex items-start gap-4 mb-4">
        <AvatarPlaceholder size="lg" />
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-navy-700 text-lg">{name}</h3>
          {bio && <p className="text-sm text-navy-400 mt-1 line-clamp-2">{bio}</p>}
        </div>
      </div>

      {/* ── Tags ── */}
      <div className="space-y-2 mb-4">
        {roleTags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-navy-600">⚙️ Role Tag :</span>
            {roleTags.map((tag) => (
              <TagBadge key={tag} label={tag} variant="role" />
            ))}
          </div>
        )}
        {skillTags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-navy-600">⚙️ Skill Tag :</span>
            {skillTags.map((tag) => (
              <TagBadge key={tag} label={tag} variant="skill" />
            ))}
          </div>
        )}
      </div>

      {/* ── Favorite button ── */}
      <div className="flex justify-end">
        <button
          onClick={onToggleFavorite}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            isFavorited
              ? "bg-navy-700 text-white"
              : "border border-navy-200 text-navy-600 hover:bg-navy-50"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill={isFavorited ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
          {isFavorited ? "Favorite" : "Add to Favorite"}
        </button>
      </div>
    </article>
  );
}
