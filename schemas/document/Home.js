export default {
    name: 'home',
    title: 'Inicio',
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
            name: 'metadescription',
            title: 'Meta descripción',
            type: 'string'
        },
        {
            name: 'keywords',
            title: 'Palabras clave',
            type: 'string'
        },
        {
            name: 'titulo1',
            title: 'Titulo 1',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'titulo2',
            title: 'Titulo 2',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'titulo3',
            title: 'Titulo 3',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'dias',
            title: 'Dias y temario por dia',
            type: 'array',
            of: [{ type: 'dias'}]
        },
        {
            name: 'precio',
            title: 'Precio con transferencia',
            type: 'number'
        },
        {
            name: 'titlePrecio',
            title: 'Titulo del precio',
            type: 'string'
        },
        {
            name: 'adicionalPrecio',
            title: 'Texto adicional al precio',
            type: 'string'
        },
        {
            name: 'precioCrypto',
            title: 'Precio con crypto',
            type: 'number'
        },
        {
            name: 'titlePrecioCrypto',
            title: 'Titulo del precio con crypto',
            type: 'string'
        },
        {
            name: 'adicionalPrecioCrypto',
            title: 'Texto adicional al precio con crypto',
            type: 'string'
        },
        {
            name: 'ventajas',
            title: 'Este Curso de Criptomonedas y Blockchain es para ti si:',
            type: 'array',
            of: [{ type: 'ventajas' }],
            validation: Rule => Rule.length(4)
        },
        {
            name: 'aprender',
            title: '¿De quién vas a aprender?',
            type: 'array',
            of: [{ type: 'aprender' }],
            validation: Rule => Rule.length(3)
        },
        {
            name: 'instructor',
            title: 'Información del instructor',
            type: 'instructor'
        },
        {
            name: 'opiniones',
            title: 'Opiniones de los estudiantes',
            type: 'array',
            of: [{ type: 'opinion' }]
        },
    ]
}