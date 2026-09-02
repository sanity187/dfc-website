"use client";

import { useTransition } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { blogContent } from "@/lib/content/blog";
import type { BlogCategory } from "@/lib/blog/types";

interface BlogFiltersProps {
  categories: BlogCategory[];
  locale: Locale;
  activeCategory?: string;
  activeSearch?: string;
  activeTag?: string;
  activeAuthor?: string;
}

export function BlogFilters({
  categories,
  locale,
  activeCategory,
  activeSearch = "",
  activeTag,
  activeAuthor,
}: BlogFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const handleCategorySelect = (slug?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) {
      params.set("category", slug);
    } else {
      params.delete("category");
    }
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search")?.toString().trim();
    const params = new URLSearchParams(searchParams.toString());
    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  const clearAllFilters = () => {
    startTransition(() => {
      router.push(pathname);
    });
  };

  const hasActiveFilters = Boolean(activeCategory || activeSearch || activeTag || activeAuthor);

  return (
    <div className="flex flex-col gap-4 mb-8">
      {/* Top Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search Bar Form */}
        <form onSubmit={handleSearchSubmit} className="relative flex-1 max-w-md">
          <input
            type="search"
            name="search"
            defaultValue={activeSearch}
            placeholder={t(blogContent.filters.searchPlaceholder, locale)}
            className="w-full rounded-xl border border-line bg-panel py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-dim/70 shadow-xs focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-dim pointer-events-none" />
        </form>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearAllFilters}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-line bg-panel px-3.5 py-2.5 text-xs font-semibold text-dim hover:text-ink hover:bg-muted/70 cursor-pointer transition-colors"
          >
            <X className="h-3.5 w-3.5" />
            <span>{t(blogContent.filters.clearFilters, locale)}</span>
          </button>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-1.5 shrink-0 text-xs font-bold text-dim mr-1">
          <SlidersHorizontal className="h-3.5 w-3.5 text-secondary" />
        </div>

        {/* All Categories Pill */}
        <button
          type="button"
          onClick={() => handleCategorySelect(undefined)}
          className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
            !activeCategory
              ? "bg-primary text-primary-foreground shadow-xs"
              : "bg-panel text-dim border border-line hover:text-ink hover:bg-muted/60"
          }`}
        >
          {t(blogContent.filters.allCategories, locale)}
        </button>

        {/* Individual Category Pills */}
        {categories.map((cat) => {
          const isSelected = activeCategory === cat.slug;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleCategorySelect(isSelected ? undefined : cat.slug)}
              className={`shrink-0 flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "bg-panel text-dim border border-line hover:text-ink hover:bg-muted/60"
              }`}
            >
              <span>{cat.name}</span>
              {typeof cat.post_count === "number" && cat.post_count > 0 && (
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                    isSelected ? "bg-white/20 text-white" : "bg-muted text-dim"
                  }`}
                >
                  {cat.post_count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
