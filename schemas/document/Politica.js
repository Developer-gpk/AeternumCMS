export default {
    name: 'politica',
    title: 'Politica de privacidad',
    type: 'document',
    __experimental_actions: [
        'create', 'update', /*'delete',*/ 'publish'
    ],
    fields: [
        {
            name: 'title',
            title: 'Titulo de la pagína',
            type: 'string'
        },
        {
            name: 'content',
            title: 'Contenido del la pagina',
            type: 'array',
            of: [{type: 'block'}]
        },
    ]
}