import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-secondary ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
      {children}
    </span>
  );
}
