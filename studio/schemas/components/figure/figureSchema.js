export default {
  name: 'figure',
  type: 'object',
  title: 'Image',
  fields: [
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Texto alternativo',
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Texto del subtitulo',
    },
  ],
}
