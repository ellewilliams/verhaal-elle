export default {
  name: 'artist',
  title: 'Artist',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
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
