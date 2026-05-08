import Image from "next/image";
import { ExternalLink, PlayCircle } from "lucide-react";
import { urlForImage } from "@/sanity/lib/client";
import type { PortfolioItem } from "@/lib/types";

type ProjectCardProps = {
  item: PortfolioItem;
};

export function ProjectCard({ item }: ProjectCardProps) {
  const imageUrl = item.image ? urlForImage(item.image).width(900).height(600).url() : null;
  const href = item.siteUrl ?? item.videoUrl ?? "#";
  const isVideo = item.kind === "video";

  return (
    <article className="group overflow-hidden rounded-2xl border border-yellow-500/20 bg-zinc-900/50 transition hover:-translate-y-1 hover:border-yellow-500/50">
      <div className="relative h-52 w-full">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-zinc-800 text-zinc-400">
            Apercu indisponible
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-wider text-yellow-300">
          {isVideo ? "Video" : "Web"}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-zinc-100">{item.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-zinc-300">{item.description}</p>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm text-yellow-300 transition hover:text-yellow-200"
        >
          {isVideo ? <PlayCircle size={16} /> : <ExternalLink size={16} />}
          {isVideo ? "Voir la video" : "Voir le projet"}
        </a>
      </div>
    </article>
  );
}
