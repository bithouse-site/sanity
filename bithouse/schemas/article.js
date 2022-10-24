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
        },
        {
            name: 'geopoint',
            type: 'geopoint',
            title: 'Geopoint'
        },
        {
            name: 'link',
            type: 'url',
            title: 'Link'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title'
            }
            
        },
        {
            name: 'date',
            type: 'datetime',
            title: 'Date',
            initialValue: (new Date()).toISOString()
        },
        {
            title: 'Comment',
            name: 'comment',
            type: 'object',
            fields: [
                {
                    name: 'name',
                    type: 'string',
                    title: 'name'
                },
                {
                    name: 'image',
                    type: 'image',
                    title: 'Image'
                },
            ]
        },
        {
            title: 'Comments',
            name: 'comments',
            type: 'array',
            of: [
                {
                    title: 'comments',
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            type: 'string',
                            title: 'name'
                        },
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Image'
                        },
                    ]
                }
            ]
          }
    ]
}