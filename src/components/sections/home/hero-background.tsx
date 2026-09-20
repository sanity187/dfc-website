import { HeroAtmosphereBackground } from "./hero-atmosphere-background";
import { HeroVideoPlayer } from "./hero-video-player";

export interface HeroBackgroundOptions {
  videoEnabled?: boolean;
  videoId?: string;
  startTime?: number;
  endTime?: number;
  playbackRate?: number;
  loop?: boolean;
  muted?: boolean;
  tintAmount?: number;
  tintClassName?: string;
}

export function HeroBackground({
  videoEnabled = true,
  videoId = "j2ie9XfyRr0",
  startTime = 10,
  endTime = 52,
  playbackRate = 1.5,
  loop = true,
  muted = true,
  tintAmount = 0.65,
  tintClassName = "",
}: HeroBackgroundOptions) {
  const opacity = tintAmount > 1 ? tintAmount / 100 : tintAmount;
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* 1. Underlying Atmospheric Grid & Glow */}
      <HeroAtmosphereBackground />

      {/* 2. YouTube Looping Background Video */}
      {videoEnabled && (
        <HeroVideoPlayer
          videoId={videoId}
          startTime={startTime}
          endTime={endTime}
          playbackRate={playbackRate}
          loop={loop}
          muted={muted}
        />
      )}

      {/* 3. Dark Tint & Contrast Overlay Layer */}
      <div
        className={`absolute inset-0 bg-black backdrop-blur-[0.5px] transition-opacity ${tintClassName}`}
        style={{ opacity }}
      />

      {/* 4. Bottom Edge Blend: In dark mode, blend into the dark canvas. In light mode, preserve video contrast with a clean dark edge rather than a milky gray haze */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-black/70 via-black/30 to-transparent dark:from-background dark:via-background/60" />
    </div>
  );
}
