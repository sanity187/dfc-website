"use client";

import { useEffect, useRef } from "react";

interface HeroVideoPlayerProps {
  videoId?: string;
  startTime?: number;
  endTime?: number;
  playbackRate?: number;
  loop?: boolean;
  muted?: boolean;
}

declare global {
  interface Window {
    YT?: {
      Player: new (element: HTMLElement, options: Record<string, unknown>) => YTPlayer;
      PlayerState: { ENDED: number; PLAYING: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YTPlayer {
  playVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  setPlaybackRate: (rate: number) => void;
  mute: () => void;
  getCurrentTime: () => number;
  destroy: () => void;
}

export function HeroVideoPlayer({
  videoId = "j2ie9XfyRr0",
  startTime = 10,
  endTime = 52,
  playbackRate = 1.5,
  loop = true,
  muted = true,
}: HeroVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const initPlayer = () => {
      if (isCancelled || !containerRef.current || !window.YT?.Player) return;

      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: muted ? 1 : 0,
          controls: 0,
          showinfo: 0,
          rel: 0,
          playsinline: 1,
          disablekb: 1,
          modestbranding: 1,
          iv_load_policy: 3,
          start: startTime,
          enablejsapi: 1,
        },
        events: {
          onReady: (event: { target: YTPlayer }) => {
            if (isCancelled) return;
            const player = event.target;
            if (muted) player.mute();
            player.seekTo(startTime, true);
            player.playVideo();

            if (endTime && loop) {
              intervalRef.current = setInterval(() => {
                try {
                  const current = player.getCurrentTime();
                  if (current >= endTime || current < startTime - 1) {
                    player.seekTo(startTime, true);
                  }
                } catch {}
              }, 300);
            }
          },
          onStateChange: (event: { data: number; target: YTPlayer }) => {
            if (isCancelled) return;
            if (event.data === window.YT?.PlayerState?.PLAYING && playbackRate !== 1) {
              event.target.setPlaybackRate(playbackRate);
            }
            if (loop && event.data === window.YT?.PlayerState?.ENDED) {
              event.target.seekTo(startTime, true);
              event.target.playVideo();
            }
          },
        },
      });
    };

    if (!window.YT?.Player) {
      const existingScript = document.getElementById("youtube-iframe-api");
      if (!existingScript) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScript = document.getElementsByTagName("script")[0];
        firstScript?.parentNode?.insertBefore(tag, firstScript);
      }
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prevCallback?.();
        initPlayer();
      };
    } else {
      initPlayer();
    }

    return () => {
      isCancelled = true;
      if (intervalRef.current) clearInterval(intervalRef.current);
      try {
        playerRef.current?.destroy();
      } catch {}
    };
  }, [videoId, startTime, endTime, playbackRate, loop, muted]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div
        ref={containerRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-[56.25vw] h-[100vh] scale-110 pointer-events-none"
      />
    </div>
  );
}
