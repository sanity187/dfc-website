interface HeroHeadlineProps {
  titlePrimary: string;
  titleSecondary: string;
  subtitle: string;
}

export function HeroHeadline({
  titlePrimary,
  titleSecondary,
  subtitle,
}: HeroHeadlineProps) {
  return (
    <div className="flex flex-col items-center text-center gap-4 max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white drop-shadow-md">
        <span>{titlePrimary}</span>{" "}
        <span className="block sm:inline text-secondary bg-gradient-to-r from-amber-400 via-secondary to-amber-300 bg-clip-text text-transparent">
          {titleSecondary}
        </span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-slate-200/95 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
        {subtitle}
      </p>
    </div>
  );
}
