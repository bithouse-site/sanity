export default {
  name: "vigentes",
  type: "document",
  title: "Vigentes",
  fields: [
    {
      name: "title",
      type: "image",
      title: "Title",
    },
    {
      name: "background",
      type: "image",
      title: "Background",
    },
    {
      name: "richTextVigentes",
      type: "richTextBody",
      title: "Content",
    },
    {
      name: "button",
      type: "buttonObject",
      title: "Button",
    },
    {
      name: "cards",
      type: "array",
      title: "Cards",
      of: [{ type: "cardObject" }],
    },
  ],
};
