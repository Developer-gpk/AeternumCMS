export default {
    localize: true,
    name: 'aprender',
    title: 'Aprender',
    type: 'object',
    fields: [
        {
            name: 'imagen',
            title: 'Imagen de la tarjeta',
            type: 'image'
        },
        {
            name: 'title',
            title: 'titulo de la tarjeta',
            type: "string"
        },
        {
            name: 'content',
            title: 'Contentido de cada tarjeta',
            type: 'string'
        }
    ]
}