/**
 * Saved / Bookmarked page.
 * Shows saved teams and people cards.
 *
 * Data comes from API — empty state shown by default.
 * When user bookmarks a team or person from the Find Team page,
 * those items will appear here.
 */
export default function SavedPage() {
  // TODO: Fetch saved/bookmarked items from API
  // const savedItems = await fetchSaved();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-navy-700 flex items-center gap-2">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
        Saved
      </h1>

      {/*
        TODO: Render saved TeamCard and PersonCard components from API data.
        Re-use the same card components from the find-team page:
          import TeamCard from "@/components/team/TeamCard";
          import PersonCard from "@/components/team/PersonCard";
      */}
      <div className="text-center py-20">
        <svg
          className="w-16 h-16 mx-auto text-navy-200 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
        <p className="text-navy-300 text-sm">
          No saved items yet — bookmark teams or people to see them here
        </p>
      </div>
    </div>
  );
}
