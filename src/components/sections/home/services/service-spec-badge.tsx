interface ServiceSpecBadgeProps {
  label: string;
  variant?: "default" | "accent";
}

export function ServiceSpecBadge({
  label,
  variant = "default",
}: ServiceSpecBadgeProps) {
  const isAccent = variant === "accent";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold tracking-tight transition-colors ${
        isAccent
          ? "bg-secondary/15 text-secondary-foreground border border-secondary/30"
          : "bg-background/80 text-ink border border-line backdrop-blur-xs"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          isAccent ? "bg-secondary" : "bg-primary"
        }`}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}
