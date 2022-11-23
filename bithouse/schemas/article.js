export default {
  name: "article",
  type: "document",
  title: "Article Schema",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "imageHeader",
      type: "image",
      title: "Image Header",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    {
      name: "articleArray",
      type: "articleBuilder",
      title: "Components",
    },
  ],
};
