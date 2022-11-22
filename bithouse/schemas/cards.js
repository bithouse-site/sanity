export default {
  name: "cards",
  type: "document",
  title: "Cards",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "type",
      type: "string",
      title: "Type",
      options: {
        list: [
          { title: "Visitantes", value: "visitantes" },
          { title: "Vigentes", value: "vigentes" },
        ],
      },
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
    {
      name: "artists",
      type: "iconTextObject",
      title: "Artists",
      hidden: ({ parent }) => parent?.type !== "visitantes",
    },
  ],
};
