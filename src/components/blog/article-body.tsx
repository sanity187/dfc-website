import { renderMarkdown } from "@/lib/blog/markdown";
import { injectVideoEmbedsIntoHtml, stripFirstVideoEmbed } from "@/lib/media/video-utils";

interface ArticleBodyProps {
  markdown?: string | null;
  html?: string | null;
  isMainVideo?: boolean;
}

export function ArticleBody({ markdown, html, isMainVideo = false }: ArticleBodyProps) {
  // If video is promoted to the main hero, strip the first video embed from the body so it isn't duplicated
  const processedMarkdown = isMainVideo ? stripFirstVideoEmbed(markdown) : markdown;
  const processedHtml = isMainVideo ? stripFirstVideoEmbed(html) : html;

  const rawHtml =
    processedHtml && processedHtml.trim()
      ? injectVideoEmbedsIntoHtml(processedHtml)
      : renderMarkdown(processedMarkdown);

  return (
    <div
      className="article-prose max-w-none text-ink text-base sm:text-lg leading-relaxed"
      dangerouslySetInnerHTML={{ __html: rawHtml }}
    />
  );
}
