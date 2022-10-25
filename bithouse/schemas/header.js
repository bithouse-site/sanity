export default {
  name: "header",
  type: "document",
  title: "Header",
  fields: [
    {
      name: "logo",
      type: "image",
      title: "Logo",
    },
    {
      title: "Menu",
      name: "menu",
      type: "array",
      of: [
        {
          title: "menu",
          type: "object",
          fields: [
            {
              name: "name",
              type: "string",
              title: "name",
            },
            {
              name: "url",
              type: "string",
              title: "Url",
            },
          ],
        },
      ],
    },
    {
      name: "contact",
      type: "string",
      title: "Contact",
    },
  ],
};
