export default {
  name: "article",
  type: "document",
  title: "Article",
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
      name: "contentBeforeCarousel",
      type: "richTextBody",
      title: "Content Before Carousel",
    },
    {
      name: "carousel",
      type: "array",
      title: "Carousel",
      of: [{ type: "image" }],
    },
    {
      name: "contentAfterCarousel",
      type: "richTextBody",
      title: "Content After Carousel",
    },
    {
      name: "dualSection",
      type: "array",
      title: "Dual Section",
      of: [
        {
          name: "dualSymmetric",
          type: "reference",
          title: "Dual Symmetric",
          to: [{ type: "dualSymmetric" }],
        },
      ],
    },
    {
      name: "articleReferences",
      type: "array",
      title: "Otros Visitantes",
      of: [{ type: "articleReference" }],
    },
    {
      name: "articleCard",
      type: "cardReference",
      title: "Article Card",
    },
  ],
};
