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
              name: "nameMenu",
              type: "string",
              title: "Name Menu",
            },
            {
              name: "submenu",
              type: "array",
              title: "Submenu",
              of: [
                {
                  title: "Submenu",
                  type: "object",
                  fields: [
                    {
                      name: "Namesubmenu",
                      type: "string",
                      title: "Name Submenu",
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
