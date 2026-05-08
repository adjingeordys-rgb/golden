"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { PortfolioItem } from "@/lib/types";

type PortfolioSectionProps = {
  items: PortfolioItem[];
};

type Filter = "all" | "web" | "video";

export function PortfolioSection({ items }: PortfolioSectionProps) {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((item) => item.kind === filter);
  }, [filter, items]);

  return (
    <section id="portfolio" className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-zinc-100">Portfolio</h2>
          <div className="flex gap-2 rounded-full border border-yellow-500/30 p-1">
            {(["all", "web", "video"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                className={`rounded-full px-4 py-2 text-xs uppercase tracking-wider transition ${
                  filter === value
                    ? "bg-yellow-500/20 text-yellow-300"
                    : "text-zinc-300 hover:text-yellow-300"
                }`}
              >
                {value === "all" ? "Tout" : value}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <ProjectCard key={`${item.kind}-${item.slug}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
