export default {
  name: "cardObject",
  type: "object",
  title: "Card",
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
      name: "content",
      type: "richTextBody",
      title: "Content",
    },
    {
      name: "link",
      type: "url",
      title: "Link",
    },
  ],
};
