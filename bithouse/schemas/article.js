export default {
    name: 'article',
    type: 'document',
    title: 'Article',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        }, 
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'enabled',
            type: 'boolean',
            title: 'Enabled'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        }
    ]
}