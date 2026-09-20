interface HeroBadgeProps {
  eyebrow: string;
  altitudeCallout?: string;
}

export function HeroBadge({ eyebrow, altitudeCallout }: HeroBadgeProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      <div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-black/40 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary shadow-lg backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
        <span>{eyebrow}</span>
      </div>

      {altitudeCallout && (
        <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md">
          <span>{altitudeCallout}</span>
        </div>
      )}
    </div>
  );
}
