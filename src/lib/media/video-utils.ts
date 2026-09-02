export type VideoSourceType = "youtube" | "direct" | "unknown";

export interface VideoInfo {
  type: VideoSourceType;
  src: string;
  youtubeId?: string;
  embedUrl?: string;
  thumbnailUrl?: string;
}

export function parseVideoUrl(url: string | null | undefined): VideoInfo | null {
  if (!url || typeof url !== "string") return null;

  const trimmed = url.trim();

  // 1. YouTube detection
  // Supports: youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID, youtube.com/shorts/ID
  const ytMatch = trimmed.match(
    /(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?.*?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i
  );

  if (ytMatch && ytMatch[1]) {
    const youtubeId = ytMatch[1];
    return {
      type: "youtube",
      src: trimmed,
      youtubeId,
      embedUrl: `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`,
      thumbnailUrl: `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`,
    };
  }

  // 2. Direct Video Streams / CDN Files (.mp4, .webm, .ogg, .mov, etc.)
  const isDirectVideo =
    /\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i.test(trimmed) ||
    trimmed.includes("blob.core.windows.net") ||
    trimmed.includes("digitaloceanspaces.com") ||
    trimmed.includes("cloudinary.com") ||
    trimmed.includes("s3.amazonaws.com");

  if (isDirectVideo) {
    return {
      type: "direct",
      src: trimmed,
    };
  }

  // 3. Fallback generic URL
  if (/^https?:\/\//i.test(trimmed)) {
    return {
      type: "direct",
      src: trimmed,
    };
  }

  return null;
}

/**
 * Replaces standalone video URLs or markdown links with embedded media player wrappers.
 */
export function injectVideoEmbedsIntoMarkdown(markdown: string): string {
  if (!markdown) return "";

  // 1. Match standalone markdown link or image on its own line: [text](youtube_url) or ![alt](youtube_url)
  const markdownLinkPattern = /^\s*!?\[([^\]]*)\]\((https?:\/\/(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?.*?v=|embed\/|shorts\/)|youtu\.be\/|.*?\.(?:mp4|webm|mov))[^\s\)]+)\)\s*$/gim;

  let result = markdown.replace(markdownLinkPattern, (match, linkTitle, url) => {
    return createEmbedHtml(url, linkTitle);
  });

  // 2. Match standalone lines that contain just a video URL
  const standaloneUrlPattern = /^(?:<p>)?\s*(https?:\/\/(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?.*?v=|embed\/|shorts\/)|youtu\.be\/|.*?\.(?:mp4|webm|mov))[^\s<>\)]+)\s*(?:<\/p>)?$/gim;

  result = result.replace(standaloneUrlPattern, (match, url) => {
    return createEmbedHtml(url);
  });

  return result;
}

/**
 * Replaces standalone HTML anchor tags linking to videos with the media player.
 */
export function injectVideoEmbedsIntoHtml(html: string): string {
  if (!html) return "";

  const htmlLinkPattern = /<p>\s*<a\s+[^>]*href=["'](https?:\/\/(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?.*?v=|embed\/|shorts\/)|youtu\.be\/|.*?\.(?:mp4|webm|mov))[^"']*)["'][^>]*>.*?<\/a>\s*<\/p>/gim;

  return html.replace(htmlLinkPattern, (match, url) => {
    return createEmbedHtml(url);
  });
}

/**
 * Extracts the first video URL (YouTube or direct stream) found in markdown or HTML content.
 */
export function extractFirstVideoUrl(content: string | null | undefined): string | null {
  if (!content || typeof content !== "string") return null;

  // 1. Markdown link / image pattern: [text](video_url) or ![alt](video_url)
  const mdLinkMatch = content.match(
    /!?\[[^\]]*\]\((https?:\/\/(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?.*?v=|embed\/|shorts\/)|youtu\.be\/|.*?\.(?:mp4|webm|mov))[^\s\)]+)\)/i
  );
  if (mdLinkMatch && mdLinkMatch[1]) {
    return mdLinkMatch[1];
  }

  // 2. Standalone URL pattern
  const urlMatch = content.match(
    /(https?:\/\/(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?.*?v=|embed\/|shorts\/)|youtu\.be\/)[a-zA-Z0-9_-]{11}(?:[^\s<>\)"]*)?|https?:\/\/[^\s<>\)"]+\.(?:mp4|webm|mov)(?:\?[^\s<>\)"]*)?)/i
  );
  if (urlMatch && urlMatch[1]) {
    return urlMatch[1];
  }

  return null;
}

/**
 * Resolves the thumbnail image for a post, falling back to YouTube or video stream thumbnail if no featured image exists.
 */
export function resolvePostThumbnail(post: {
  featured_image_url?: string | null;
  body_markdown?: string | null;
  body_html?: string | null;
}): {
  thumbnailUrl: string | null;
  hasVideo: boolean;
  videoInfo: VideoInfo | null;
} {
  const videoUrl = extractFirstVideoUrl(post.body_markdown || post.body_html);
  const videoInfo = videoUrl ? parseVideoUrl(videoUrl) : null;
  const hasVideo = Boolean(videoInfo);

  // 1. Explicit featured image
  if (post.featured_image_url && post.featured_image_url.trim()) {
    return {
      thumbnailUrl: post.featured_image_url.trim(),
      hasVideo,
      videoInfo,
    };
  }

  // 2. Video thumbnail fallback (e.g. YouTube maxresdefault/hqdefault)
  if (videoInfo?.thumbnailUrl) {
    return {
      thumbnailUrl: videoInfo.thumbnailUrl,
      hasVideo,
      videoInfo,
    };
  }

  return {
    thumbnailUrl: null,
    hasVideo,
    videoInfo,
  };
}

/**
 * Removes the first video URL/link from markdown or HTML content to avoid duplicate rendering when promoted to hero.
 */
export function stripFirstVideoEmbed(content: string | null | undefined): string {
  if (!content) return "";

  // 1. Remove standalone markdown link or image on its own line
  const mdLinkLinePattern = /^\s*!?\[[^\]]*\]\((https?:\/\/(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?.*?v=|embed\/|shorts\/)|youtu\.be\/|.*?\.(?:mp4|webm|mov))[^\s\)]+)\)\s*$/im;
  if (mdLinkLinePattern.test(content)) {
    return content.replace(mdLinkLinePattern, "").trim();
  }

  // 2. Remove standalone URL on its own line
  const standaloneUrlLinePattern = /^(?:<p>)?\s*(https?:\/\/(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?.*?v=|embed\/|shorts\/)|youtu\.be\/|.*?\.(?:mp4|webm|mov))[^\s<>\)]+)\s*(?:<\/p>)?$/im;
  if (standaloneUrlLinePattern.test(content)) {
    return content.replace(standaloneUrlLinePattern, "").trim();
  }

  // 3. Remove first occurrence of video URL if embedded in HTML anchor
  const htmlAnchorPattern = /<p>\s*<a\s+[^>]*href=["'](https?:\/\/(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?.*?v=|embed\/|shorts\/)|youtu\.be\/|.*?\.(?:mp4|webm|mov))[^"']*)["'][^>]*>.*?<\/a>\s*<\/p>/i;
  if (htmlAnchorPattern.test(content)) {
    return content.replace(htmlAnchorPattern, "").trim();
  }

  return content;
}

function createEmbedHtml(url: string, title?: string): string {
  const video = parseVideoUrl(url);
  if (!video) return url;

  if (video.type === "youtube" && video.youtubeId) {
    return `\n\n<div class="media-player-wrapper" data-video-type="youtube" data-video-id="${video.youtubeId}" data-video-src="${video.src}">
      <iframe
        src="https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1"
        title="${title || "Skydiving Video Player"}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>\n\n`;
  }

  if (video.type === "direct") {
    return `\n\n<div class="media-player-wrapper" data-video-type="direct">
      <video controls playsinline preload="metadata">
        <source src="${video.src}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>\n\n`;
  }

  return url;
}

