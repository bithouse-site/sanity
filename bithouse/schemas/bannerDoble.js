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
      name:"content",
      type: "richTextBody",
      title: "Content",
    },
    {
      name: "button",
      type: "buttonObject",
      title: "Button",
    },
    {
      name: "colorLeft",
      type: "color",
      title: "Color Left",
    },
    {
      name: "colorRight",
      type: "color",
      title: "Color Right",
    },
  ],
};
