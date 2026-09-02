import type { ReactNode } from "react";
import { SectionHeading } from "./section-heading";

interface PageShellProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  badge?: string;
}

export function PageShell({
  eyebrow,
  title,
  subtitle,
  children,
  badge,
}: PageShellProps) {
  return (
    <div className="flex flex-col min-h-[60vh] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl w-full">
        {/* Page Header Block */}
        <div className="rounded-2xl border border-line bg-panel p-8 sm:p-12 text-center shadow-sm relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-subtle rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 right-10 w-72 h-72 bg-secondary-subtle rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            align="center"
            as="h1"
          />

          {badge && (
            <div className="mt-6 inline-flex items-center rounded-full bg-secondary/15 px-4 py-1.5 text-xs font-semibold text-secondary">
              {badge}
            </div>
          )}
        </div>

        {/* Section Container for Future Section Drop-ins */}
        {children && <div className="mt-12 flex flex-col gap-12">{children}</div>}
      </div>
    </div>
  );
}
