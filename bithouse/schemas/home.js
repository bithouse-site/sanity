export default {
  name: "home",
  type: "document",
  title: "Home Schema",
  fields: [
    {
      name: "HomeBuilder",
      type: "array",
      title: "Home Builder",
      of: [
        {
          name: "header",
          type: "reference",
          title: "Header",
          to: [{ type: "header" }],
        },
        {
          name: "banner",
          type: "reference",
          title: "Banner",
          to: [{ type: "banner" }],
        },
        {
          name: "bannerDoble",
          type: "reference",
          title: "Banner Doble",
          to: [{ type: "bannerDoble" }],
        },
        {
          name: "footer",
          type: "reference",
          title: "Footer",
          to: [{ type: "footer" }],
        },
      ],
    },
  ],
};
