export default {
  name: "dualAsymmetric",
  type: "document",
  title: "Dual Asymmetric",
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
      name: "imageSide",
      type: "string",
      title: "Image Side",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
      },
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "content",
      type: "string",
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
