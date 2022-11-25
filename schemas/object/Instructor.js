export default {
    localize: true,
    name: 'instructor',
    title: 'Instructor',
    type: 'object',
    fields: [
        {
            name: 'imagen',
            title: 'Imagen del instructor',
            type: 'image'
        },
        {
            name: 'nombre',
            title: 'Nombre del instructor',
            type: "string"
        },
        {
            name: 'content',
            title: 'Contentido del instructor',
            type: 'array',
            of: [{ type: 'string' }]
        }
    ]
}