import { marked } from "marked";
import { injectVideoEmbedsIntoMarkdown } from "@/lib/media/video-utils";

marked.setOptions({
  gfm: true,
  breaks: false,
});

export function renderMarkdown(markdown: string | null | undefined): string {
  if (!markdown) return "";
  try {
    // Normalize excessive whitespace between list items and horizontal rules
    const cleanMarkdown = markdown
      .replace(/\r\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n");

    // Automatically detect and inject Media Player embeds for YouTube or CDN links
    const withVideos = injectVideoEmbedsIntoMarkdown(cleanMarkdown);

    const html = marked.parse(withVideos);
    if (typeof html === "string") {
      return html;
    }
    return String(html);
  } catch (error) {
    console.error("Error rendering markdown:", error);
    return markdown;
  }
}
