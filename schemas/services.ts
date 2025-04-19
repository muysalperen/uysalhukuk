import { defineType } from 'sanity'

export const services = defineType({
  name: 'service',
  title: 'Hizmet Alanı',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: Rule => Rule.required().min(3).max(100),
    },
    {
      name: 'description',
      title: 'Açıklama',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required().min(10),
    },
    {
      name: 'icon',
      title: 'İkon (emoji ya da unicode)',
      type: 'string',
      validation: Rule => Rule.required().min(1).max(4),
    },
  ],
})
