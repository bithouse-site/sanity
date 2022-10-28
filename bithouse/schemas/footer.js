export default {
    name: 'footer',
    type: 'document',
    title: 'Footer Schema',
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
                    name: 'socialMedia',
                    title: 'Social Media',
                    type: 'socialMedia'
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