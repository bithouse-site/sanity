export default {
  name: "articleBuilder",
  type: "array",
  title: "Article Builder",
  of: [
    {
      name: "carouselArticle",
      type: "carousel",
      title: "Carousel",
    },
    {
      name: "dualSectionArticle",
      type: "dualSectionArray",
      title: "Dual Section Article",
    },
    {
      name: "subtitleArt",
      type: "string",
      title: "Subtitle",
    },
  ],
};
