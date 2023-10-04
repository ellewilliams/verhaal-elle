export default {
  name: 'article',
  title: 'Article',
  type: 'object',
  fields: [
    {
      name: 'publication',
      type: 'string',
      title: 'Publication',
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: 'title',
      type: 'text',
      rows: 2,
      title: 'Title',
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image',
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: 'href',
      type: 'url',
      title: 'Link',
      validation: (Rule: { uri: (arg0: { scheme: string[]; }) => any; }) => Rule.uri({
        scheme: ['http', 'https']
      })
    },
  ],
}
