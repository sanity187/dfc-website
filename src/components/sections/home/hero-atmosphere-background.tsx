export function HeroAtmosphereBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none bg-canvas"
      aria-hidden="true"
    >
      {/* Stratosphere Radial Gradients */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-canvas via-canvas/60 to-transparent" />

      {/* Altitude & Flight Telemetry Grid Accent */}
      <div className="absolute inset-0 opacity-[0.035] dark:opacity-[0.07] bg-[linear-gradient(to_right,var(--ink)_1px,transparent_1px),linear-gradient(to_bottom,var(--ink)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      {/* Subtle Aviation Horizon Line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-line-strong to-transparent opacity-40" />
    </div>
  );
}
