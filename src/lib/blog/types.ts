export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  body_markdown: string | null;
  body_html: string | null;
  featured_image_url: string | null;
  featured_image_alt: string | null;
  meta_title: string | null;
  meta_description: string | null;
  canonical_url: string | null;
  og_image_url: string | null;
  status: "draft" | "published" | "archived";
  published_at: string | null;
  scheduled_at: string | null;
  author_id: string;
  author_name: string | null;
  reading_time_minutes: number;
  word_count: number;
  focus_keyword_id: string | null;
  seo_score: number;
  created_at: string;
  updated_at: string;
  categories?: BlogCategory[];
  tags?: BlogTag[];
  author?: BlogAuthor | null;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  parent_id: string | null;
  post_count?: number;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  post_count?: number;
}

export interface BlogAuthor {
  id: string;
  email: string;
  name: string;
  avatar_url: string | null;
  role: string;
  bio: string | null;
  website: string | null;
  twitter_handle: string | null;
  linkedin_url: string | null;
  github_username: string | null;
  location: string | null;
  company: string | null;
  job_title: string | null;
}

export interface BlogFilterOptions {
  categorySlug?: string;
  tagSlug?: string;
  authorName?: string;
  search?: string;
  limit?: number;
  offset?: number;
}
