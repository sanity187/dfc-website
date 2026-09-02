import type { ReactNode } from "react";
import { Eyebrow } from "./eyebrow";
import { DisplayTitle } from "./display-title";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as = "h2",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col gap-3 ${
        isCenter ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left max-w-2xl"
      } ${className}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <DisplayTitle as={as}>{title}</DisplayTitle>
      {subtitle && (
        <p className="text-base sm:text-lg text-dim leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
