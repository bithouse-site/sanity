export default {
  name: "header",
  type: "document",
  title: "Header Schema",
  fields: [
    {
      name: "logo",
      type: "image",
      title: "Logo",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Menu",
      name: "menu",
      type: "menu",
    },
    {
      name: "ctaButton",
      type: "buttonObject",
      title: "Button",
    },
  ],
};
