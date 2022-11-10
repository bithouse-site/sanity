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
          name: "hero",
          type: "reference",
          title: "Hero",
          to: [{ type: "hero" }],
        }
      ],
    },
  ],
};
