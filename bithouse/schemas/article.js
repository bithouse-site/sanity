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
        // {
        //     title: 'Comment',
        //     name: 'sComment',
        //     type: 'object',
        //     fields: [
        //         {
        //             name: 'simpleComment',
        //             type: 'string',
        //             title: 'simpleComment'
        //         },
        //         {
        //             name: 'simpleCommentImage',
        //             type: 'image',
        //             title: 'simpleCommentImage'
        //         },
        //     ]
        // },
        // {
        //     title: 'Comments',
        //     name: 'aComments',
        //     type: 'array',
        //     of: [
        //         {
        //             title: 'Subcomments',
        //             type: 'object',
        //             fields: [
        //                 {
        //                     name: 'multipleComments',
        //                     type: 'string',
        //                     title: 'multipleComments'
        //                 },
        //                 {
        //                     name: 'multipleCommentsImage',
        //                     type: 'image',
        //                     title: 'multipleCommentsImage'
        //                 },
        //             ]
        //         }
        //     ]
        //   }
    ]
}