import type { BlogAuthor } from "./types";

export function getAuthorDisplayName(
  author?: BlogAuthor | null,
  postAuthorName?: string | null
): string {
  if (author?.name && author.name.trim() && author.name.toLowerCase() !== "info") {
    return author.name.trim();
  }
  if (postAuthorName && postAuthorName.trim() && postAuthorName.toLowerCase() !== "info") {
    return postAuthorName.trim();
  }
  if (author?.name && author.name.trim()) {
    return author.name.trim();
  }
  if (postAuthorName && postAuthorName.trim()) {
    return postAuthorName.trim();
  }
  if (author?.email) {
    return author.email.split("@")[0];
  }
  return "Dallas Skydive Center";
}

export function getAuthorInitials(nameOrEmail?: string | null): string {
  if (!nameOrEmail || !nameOrEmail.trim()) {
    return "DS";
  }

  const clean = nameOrEmail.trim();

  // If it's an email address, extract handle
  const text = clean.includes("@") ? clean.split("@")[0] : clean;

  const parts = text.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  if (parts.length === 1) {
    const single = parts[0];
    if (single.length >= 2) {
      return single.slice(0, 2).toUpperCase();
    }
    return single.toUpperCase();
  }

  return "DS";
}

export function isGenericDefaultAvatar(url?: string | null): boolean {
  if (!url) return true;
  // Check if it's a generic gravatar fallback pointing to auth0 default initials
  if (url.includes("cdn.auth0.com/avatars") || url.includes("gravatar.com/avatar")) {
    return true;
  }
  return false;
}
