export default {
  name: 'people',
  title: 'People',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image',
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
  ],
  preview: {
    select: {
      image: 'image',
      name: 'name'
    },
    prepare: (selection: { image: object | undefined, name: string | undefined }) => {
      const { image, name } = selection
      return {
        title: name,
        media: image,
      }
    }
  },
}
