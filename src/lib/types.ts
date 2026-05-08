export type SanityImage = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export type Project = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  siteUrl?: string;
  technologies: string[];
  image?: SanityImage;
};

export type Video = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  videoUrl: string;
  thumbnail?: SanityImage;
};

export type PortfolioItem = {
  kind: "web" | "video";
  slug: string;
  title: string;
  description: string;
  image?: SanityImage;
  siteUrl?: string;
  videoUrl?: string;
};
