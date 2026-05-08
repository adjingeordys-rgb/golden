import { groq } from "next-sanity";

export const projectsQuery = groq`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    siteUrl,
    technologies,
    image
  }
`;

export const videosQuery = groq`
  *[_type == "video"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    videoUrl,
    thumbnail
  }
`;
