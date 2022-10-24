export default {
    name: 'footer',
    type: 'document',
    title: 'Footer',
    fields: [
        {
            name: 'logo',
            type: 'image',
            title: 'Logo'
        },
        {
            name: 'media',
            type: 'array',
            title: 'Media',
            of: [
                {
                    name: 'media',
                    title: 'Social Media',
                    type: 'object',
                    fields: [
                        {
                            name: 'icon',
                            type: 'image',
                            title: 'Icon'
                        },
                        {
                            name: 'link',
                            type: 'url',
                            title: 'Link'
                        }
                    ]
                }
            ]
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address'
        },
        {
            name: 'phone',
            type: 'string',
            title: 'Phone'
        }
    ]
}