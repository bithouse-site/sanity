export default {
    title: "menu",
    type: "object",
    name: "menuObject",
    fields: [
        {
            name: "nameMenu",
            type: "string",
            title: "Name Menu",
        },
        {
            name: "submenu",
            type: "submenu",
            title: "Submenu",
        },
    ],
}