import type { ReactNode } from "react";

interface DisplayTitleProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function DisplayTitle({
  children,
  className = "",
  as: Component = "h1",
}: DisplayTitleProps) {
  return (
    <Component
      className={`font-black tracking-tight text-ink text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${className}`}
    >
      {children}
    </Component>
  );
}
