export default {
  name: "bannerDoble",
  type: "document",
  title: "Banner Doble",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "button",
      type: "buttonObject",
      title: "Button",
    },
    {
      name: "color",
      type: "color",
      title: "Color List",
    },
  ],
};
