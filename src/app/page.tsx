import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Services } from "@/components/Services";
import { projectsQuery, videosQuery } from "@/lib/groq";
import { sanityClient } from "@/lib/sanity.client";
import type { PortfolioItem, Project, Video } from "@/lib/types";

async function getPortfolioItems(): Promise<PortfolioItem[]> {
  try {
    const [projects, videos] = await Promise.all([
      sanityClient.fetch<Project[]>(projectsQuery),
      sanityClient.fetch<Video[]>(videosQuery),
    ]);

    const projectItems: PortfolioItem[] = projects.map((project) => ({
      kind: "web",
      slug: project.slug,
      title: project.title,
      description: project.description,
      image: project.image,
      siteUrl: project.siteUrl,
    }));

    const videoItems: PortfolioItem[] = videos.map((video) => ({
      kind: "video",
      slug: video.slug,
      title: video.title,
      description: `Categorie: ${video.category}`,
      image: video.thumbnail,
      videoUrl: video.videoUrl,
    }));

    return [...projectItems, ...videoItems];
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const items = await getPortfolioItems();

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <PortfolioSection items={items} />
      </main>
      <Footer />
    </div>
  );
}
