/**
 * Reusable avatar component.
 * Pass `src` to show a real user image, otherwise renders a generic person icon.
 */

interface AvatarPlaceholderProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  /** URL of the user's profile image — leave empty for the default placeholder */
  src?: string;
  alt?: string;
}

const sizeClasses: Record<string, string> = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-20 h-20",
  xl: "w-28 h-28",
};

export default function AvatarPlaceholder({
  size = "md",
  className = "",
  src,
  alt = "User avatar",
}: AvatarPlaceholderProps) {
  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-navy-100 border-2 border-navy-200 flex items-center justify-center overflow-hidden shrink-0 ${className}`}
    >
      {src ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <svg className="w-1/2 h-1/2 text-navy-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
        </svg>
      )}
    </div>
  );
}
