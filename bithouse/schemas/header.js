export default {
  name: "header",
  type: "document",
  title: "Header Schema",
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
              name: "link",
              type: "string",
              title: "Link",
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
