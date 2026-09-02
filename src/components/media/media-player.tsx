"use client";

import { useState } from "react";
import { Play, Sparkles } from "lucide-react";
import { parseVideoUrl } from "@/lib/media/video-utils";

interface MediaPlayerProps {
  src: string;
  title?: string;
  poster?: string;
  autoPlay?: boolean;
  className?: string;
  aspectRatio?: string;
}

export function MediaPlayer({
  src,
  title,
  poster,
  autoPlay = false,
  className = "",
  aspectRatio = "aspect-16/9",
}: MediaPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const video = parseVideoUrl(src);

  if (!video) {
    return null;
  }

  const thumbnail =
    poster ||
    (video.type === "youtube" && video.youtubeId
      ? `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
      : undefined);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-line bg-panel shadow-lg ${aspectRatio} ${className}`}
    >
      {/* 1. YouTube Player Mode */}
      {video.type === "youtube" && video.youtubeId && (
        <>
          {isPlaying ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={title || "Skydiving Video Player"}
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            /* Fast-Loading Facade Poster with Custom Play Button */
            <div
              onClick={handlePlayClick}
              className="group relative flex h-full w-full cursor-pointer items-center justify-center bg-black overflow-hidden"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handlePlayClick()}
              aria-label={`Play video: ${title || "Skydiving Video"}`}
            >
              {thumbnail && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={thumbnail}
                  alt={title || "Video thumbnail"}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              )}

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/30 transition-opacity group-hover:opacity-75" />

              {/* Custom Branded Play Button */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-3 text-center px-4">
                <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary group-hover:shadow-[0_0_35px_rgba(251,167,19,0.7)]">
                  <Play className="h-7 w-7 sm:h-9 sm:w-9 fill-current translate-x-0.5" />
                </div>

                {title && (
                  <span className="max-w-lg text-center text-sm sm:text-base font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] line-clamp-2">
                    {title}
                  </span>
                )}
              </div>

              {/* Top Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur-md border border-white/10">
                <Sparkles className="h-3 w-3 text-secondary" />
                <span>Video Player</span>
              </div>
            </div>
          )}
        </>
      )}

      {/* 2. Direct Video Stream / CDN Mode */}
      {video.type === "direct" && (
        <video
          src={video.src}
          poster={thumbnail}
          controls
          playsInline
          autoPlay={isPlaying}
          preload="metadata"
          className="h-full w-full object-cover"
        >
          Your browser does not support HTML5 video streaming.
        </video>
      )}
    </div>
  );
}
