export default {
  name: 'regions',
  title: 'Estados de la republica',
  type: 'document',
  fields: [
    {
      name: 'region',
      title: 'Nombre del estado',
      type: 'string',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seoData',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
    },
    {
      name: 'header',
      title: 'Header',
      type: 'headerData',
    },
    {
      name: 'secion1',
      title: 'Primera Sección',
      type: 'section01',
    },
    {
      name: 'secion2',
      title: 'Segunda Sección',
      type: 'section02',
    },
    {
      name: 'dispo',
      title: 'Disponibilidad',
      type: 'dispo',
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'footer',
    },
    {
      name: 'icons',
      title: 'Iconos',
      type: 'object',
      fields: [
        {
          title: 'Facebook',
          name: 'facebook',
          type: 'SocialIcons',
        },
        {
          title: 'Instagram',
          name: 'instagram',
          type: 'SocialIcons',
        },
        {
          title: 'WhatsApp',
          name: 'whatsApp',
          type: 'SocialIcons',
        },
        {
          title: 'LogoMariachon',
          name: 'logoMariachon',
          type: 'SocialIcons',
        },
      ],
    },
  ],
}
