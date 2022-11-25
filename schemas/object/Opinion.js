export default {
    localize: true,
    name: 'opinion',
    title: 'Opinion',
    type: 'object',
    fields: [
        {
            name: 'imagen',
            title: 'Imagen del estudiante',
            type: 'image'
        },
        {
            name: 'nombre',
            title: 'Nombre del estudiante',
            type: "string"
        },
        {
            name: 'content',
            title: 'Contentido del instructor',
            type: 'array',
            of: [{ type: 'block' }]
        }
    ]
}