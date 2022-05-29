export default {
  title: 'Primera seccion ',
  name: 'section01',
  type: 'object',
  fields: [
    {
      title: 'Texto principal',
      name: 'title',
      type: 'object',
      fields: [
        {
          title: 'Titulo',
          name: 'title',
          type: 'object',
          fields: [
            {
              name: 'textTa',
              type: 'string',
            },
            {
              name: 'textTb',
              type: 'string',
            },
            {
              name: 'textTc',
              type: 'string',
            },
          ],
        },
        {
          name: 'paragraph',
          title: 'Parrafo',
          type: 'object',
          fields: [
            {
              title: 'Parrafo',
              name: 'textP',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
