import { defineField, defineType } from "sanity";

export const videoType = defineType({
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (rule) => rule.required().min(3),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "videoUrl",
      title: "URL de la video",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categorie",
      type: "string",
      options: {
        list: [
          { title: "Reel", value: "reel" },
          { title: "Ads", value: "ads" },
          { title: "Presentation", value: "presentation" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Miniature",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "thumbnail",
    },
  },
});
