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
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
        },
      ],
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
      of: [
        {
          name: "articleReference",
          type: "reference",
          title: "Article Reference",
          to: [{ type: "article" }],
        },
      ],
    },
    {
      name: "articleCard",
      type: "object",
      title: "Article Card",
      fields: [
        {
          name: "text",
          type: "richTextBody",
          title: "Text",
        },
        {
          name: "artists",
          type: "string",
          title: "Artists",
        },
      ],
    },
  ],
};
