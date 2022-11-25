export default {
    localize: true,
    name: 'dias',
    title: 'Dias',
    type: 'object',
    fields: [
        {
            name: 'imagen',
            title: 'Imagen del dia',
            type: 'image'
        },
        {
            name: 'title',
            title: 'Titulo del dia',
            type: "string"
        },
        {
            name: 'subtitle',
            title: 'Subtitulo del dia',
            type: 'string'
        },
        {
            name: 'temario',
            title: 'Temario del dia',
            type: 'array',
            of: [{ type: 'string' }],
        }
    ]
}