import { getAuthorDisplayName, getAuthorInitials, isGenericDefaultAvatar } from "@/lib/blog/author";
import type { BlogAuthor } from "@/lib/blog/types";

interface AuthorAvatarProps {
  author?: BlogAuthor | null;
  name?: string | null;
  size?: "sm" | "md" | "lg";
}

export function AuthorAvatar({ author, name, size = "md" }: AuthorAvatarProps) {
  const displayName = getAuthorDisplayName(author, name);
  const initials = getAuthorInitials(displayName);
  const isGeneric = isGenericDefaultAvatar(author?.avatar_url);

  const sizeClasses = {
    sm: "h-7 w-7 text-[11px]",
    md: "h-9 w-9 text-xs",
    lg: "h-16 w-16 text-lg",
  }[size];

  // If a real custom uploaded image exists (and not a generic gravatar fallback)
  if (author?.avatar_url && !isGeneric) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={author.avatar_url}
        alt={displayName}
        className={`${sizeClasses} shrink-0 rounded-full border border-line object-cover shadow-xs`}
        loading="lazy"
      />
    );
  }

  // Render high-end brand initials badge
  return (
    <div
      className={`${sizeClasses} shrink-0 flex items-center justify-center rounded-full bg-linear-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground font-black tracking-wider shadow-xs border border-primary/20 select-none`}
      aria-label={displayName}
      title={displayName}
    >
      <span>{initials}</span>
    </div>
  );
}
