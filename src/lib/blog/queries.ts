import { getBlogDb } from "./db";
import type { BlogPost, BlogCategory, BlogTag, BlogAuthor, BlogFilterOptions } from "./types";

export async function getPublishedPosts(options: BlogFilterOptions = {}): Promise<{
  posts: BlogPost[];
  total: number;
}> {
  try {
    const db = getBlogDb();
    const { categorySlug, tagSlug, authorName, search, limit = 12, offset = 0 } = options;

    let query = `
      SELECT DISTINCT p.*
      FROM posts p
      LEFT JOIN post_categories pc ON p.id = pc.post_id
      LEFT JOIN categories c ON pc.category_id = c.id
      LEFT JOIN post_tags pt ON p.id = pt.post_id
      LEFT JOIN tags t ON pt.tag_id = t.id
      WHERE p.status = 'published'
    `;
    const params: (string | number)[] = [];

    if (categorySlug) {
      query += ` AND (c.slug = ? OR c.id = ?)`;
      params.push(categorySlug, categorySlug);
    }

    if (tagSlug) {
      query += ` AND (t.slug = ? OR t.name = ?)`;
      params.push(tagSlug, tagSlug);
    }

    if (authorName) {
      query += ` AND p.author_name = ?`;
      params.push(authorName);
    }

    if (search && search.trim()) {
      query += ` AND (p.title LIKE ? OR p.excerpt LIKE ? OR p.body_markdown LIKE ?)`;
      const searchPattern = `%${search.trim()}%`;
      params.push(searchPattern, searchPattern, searchPattern);
    }

    query += ` ORDER BY p.published_at DESC, p.created_at DESC LIMIT ? OFFSET ?`;
    params.push(limit, offset);

    const result = await db.execute({ sql: query, args: params });
    const posts = result.rows as unknown as BlogPost[];

    // Fetch all users to map author details
    const usersRes = await db.execute(`SELECT * FROM users`);
    const usersMap = new Map<string, BlogAuthor>();
    for (const u of usersRes.rows as unknown as BlogAuthor[]) {
      usersMap.set(u.id, u);
    }

    // Hydrate categories, tags, and author for each post
    for (const post of posts) {
      post.categories = await getCategoriesForPost(post.id);
      post.tags = await getTagsForPost(post.id);
      if (post.author_id && usersMap.has(post.author_id)) {
        post.author = usersMap.get(post.author_id);
        if (post.author?.name && post.author.name.trim()) {
          post.author_name = post.author.name;
        }
      }
    }

    // Count query
    let countQuery = `
      SELECT COUNT(DISTINCT p.id) as total
      FROM posts p
      LEFT JOIN post_categories pc ON p.id = pc.post_id
      LEFT JOIN categories c ON pc.category_id = c.id
      LEFT JOIN post_tags pt ON p.id = pt.post_id
      LEFT JOIN tags t ON pt.tag_id = t.id
      WHERE p.status = 'published'
    `;
    const countParams: (string | number)[] = [];
    if (categorySlug) {
      countQuery += ` AND (c.slug = ? OR c.id = ?)`;
      countParams.push(categorySlug, categorySlug);
    }
    if (tagSlug) {
      countQuery += ` AND (t.slug = ? OR t.name = ?)`;
      countParams.push(tagSlug, tagSlug);
    }
    if (authorName) {
      countQuery += ` AND p.author_name = ?`;
      countParams.push(authorName);
    }
    if (search && search.trim()) {
      countQuery += ` AND (p.title LIKE ? OR p.excerpt LIKE ? OR p.body_markdown LIKE ?)`;
      const searchPattern = `%${search.trim()}%`;
      countParams.push(searchPattern, searchPattern, searchPattern);
    }

    const countResult = await db.execute({ sql: countQuery, args: countParams });
    const total = (countResult.rows[0]?.total as number) || posts.length;

    return { posts, total };
  } catch (error) {
    console.error("Error fetching published posts from TursoDB:", error);
    return { posts: [], total: 0 };
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const db = getBlogDb();
    const result = await db.execute({
      sql: `SELECT * FROM posts WHERE slug = ? AND status = 'published' LIMIT 1`,
      args: [slug],
    });

    if (result.rows.length === 0) {
      return null;
    }

    const post = result.rows[0] as unknown as BlogPost;
    post.categories = await getCategoriesForPost(post.id);
    post.tags = await getTagsForPost(post.id);

    if (post.author_id) {
      const authorRes = await db.execute({
        sql: `SELECT * FROM users WHERE id = ? LIMIT 1`,
        args: [post.author_id],
      });
      if (authorRes.rows.length > 0) {
        post.author = authorRes.rows[0] as unknown as BlogAuthor;
        if (post.author.name && post.author.name.trim()) {
          post.author_name = post.author.name.trim();
        }
      }
    }

    return post;
  } catch (error) {
    console.error(`Error fetching post by slug "${slug}" from TursoDB:`, error);
    return null;
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  try {
    const db = getBlogDb();
    const result = await db.execute(`SELECT slug FROM posts WHERE status = 'published'`);
    return result.rows.map((row) => String(row.slug));
  } catch (error) {
    console.error("Error fetching post slugs from TursoDB:", error);
    return [];
  }
}

export async function getAllCategories(): Promise<BlogCategory[]> {
  try {
    const db = getBlogDb();
    const result = await db.execute(`
      SELECT c.*, COUNT(pc.post_id) as post_count
      FROM categories c
      LEFT JOIN post_categories pc ON c.id = pc.category_id
      LEFT JOIN posts p ON pc.post_id = p.id AND p.status = 'published'
      GROUP BY c.id
      ORDER BY post_count DESC, c.name ASC
    `);
    return result.rows as unknown as BlogCategory[];
  } catch (error) {
    console.error("Error fetching categories from TursoDB:", error);
    return [];
  }
}

export async function getAllTags(): Promise<BlogTag[]> {
  try {
    const db = getBlogDb();
    const result = await db.execute(`
      SELECT t.*, COUNT(pt.post_id) as post_count
      FROM tags t
      LEFT JOIN post_tags pt ON t.id = pt.tag_id
      LEFT JOIN posts p ON pt.post_id = p.id AND p.status = 'published'
      GROUP BY t.id
      ORDER BY post_count DESC, t.name ASC
    `);
    return result.rows as unknown as BlogTag[];
  } catch (error) {
    console.error("Error fetching tags from TursoDB:", error);
    return [];
  }
}

export async function getRelatedPosts(currentPostId: string, limit = 3): Promise<BlogPost[]> {
  try {
    const db = getBlogDb();
    const result = await db.execute({
      sql: `
        SELECT DISTINCT p.*
        FROM posts p
        JOIN post_categories pc ON p.id = pc.post_id
        WHERE pc.category_id IN (
          SELECT category_id FROM post_categories WHERE post_id = ?
        )
        AND p.id != ?
        AND p.status = 'published'
        ORDER BY p.published_at DESC
        LIMIT ?
      `,
      args: [currentPostId, currentPostId, limit],
    });

    const posts = result.rows as unknown as BlogPost[];
    if (posts.length < limit) {
      const moreResult = await db.execute({
        sql: `
          SELECT * FROM posts
          WHERE id != ? AND status = 'published'
          ORDER BY published_at DESC
          LIMIT ?
        `,
        args: [currentPostId, limit - posts.length],
      });
      for (const row of moreResult.rows as unknown as BlogPost[]) {
        if (!posts.some((p) => p.id === row.id)) {
          posts.push(row);
        }
      }
    }

    for (const post of posts) {
      post.categories = await getCategoriesForPost(post.id);
    }

    return posts;
  } catch (error) {
    console.error("Error fetching related posts:", error);
    return [];
  }
}

export async function getAuthorRecentPosts(
  authorId: string,
  currentPostId?: string,
  limit = 3
): Promise<BlogPost[]> {
  try {
    const db = getBlogDb();
    let query = `
      SELECT * FROM posts
      WHERE author_id = ? AND status = 'published'
    `;
    const params: (string | number)[] = [authorId];

    if (currentPostId) {
      query += ` AND id != ?`;
      params.push(currentPostId);
    }

    query += ` ORDER BY published_at DESC, created_at DESC LIMIT ?`;
    params.push(limit);

    const result = await db.execute({ sql: query, args: params });
    const posts = result.rows as unknown as BlogPost[];

    for (const post of posts) {
      post.categories = await getCategoriesForPost(post.id);
    }

    return posts;
  } catch (error) {
    console.error("Error fetching author recent posts:", error);
    return [];
  }
}

async function getCategoriesForPost(postId: string): Promise<BlogCategory[]> {
  try {
    const db = getBlogDb();
    const res = await db.execute({
      sql: `
        SELECT c.*
        FROM categories c
        JOIN post_categories pc ON c.id = pc.category_id
        WHERE pc.post_id = ?
      `,
      args: [postId],
    });
    return res.rows as unknown as BlogCategory[];
  } catch {
    return [];
  }
}

async function getTagsForPost(postId: string): Promise<BlogTag[]> {
  try {
    const db = getBlogDb();
    const res = await db.execute({
      sql: `
        SELECT t.*
        FROM tags t
        JOIN post_tags pt ON t.id = pt.tag_id
        WHERE pt.post_id = ?
      `,
      args: [postId],
    });
    return res.rows as unknown as BlogTag[];
  } catch {
    return [];
  }
}
