export default {
  name: "hero",
  type: "document",
  title: "Hero",
  fields: [
    {
      name: "imageHero",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Title",
      name: "titleHero",
      type: "string",
    },
    {
      title: "Body Hero",
      name: "RichTextHero",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "mediaHero",
      type: "array",
      title: "Social Networks",
      of: [
        {
          name: "socialMedia",
          title: "Social Media",
          type: "socialMedia",
        },
      ],
    },
  ],
};
