export default {
  title: 'Header',
  name: 'headerData',
  type: 'object',
  fields: [
    {
      title: 'Imagen principal',
      name: 'img',
      type: 'figure',
    },
    {
      title: 'Formulario',
      name: 'form',
      type: 'object',
      fields: [
        {
          title: 'Titulo',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Texto de boton',
          name: 'button',
          type: 'string',
        },
        {
          title: 'Covertura',
          name: 'cover',
          type: 'string',
        },
      ],
    },
  ],
}
