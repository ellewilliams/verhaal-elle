export default {
  name: 'award',
  title: 'Award',
  type: 'object',
  fields: [
    {
      name: 'award',
      type: 'string',
      title: 'Award',
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: 'project',
      type: 'text',
      rows: 1,
      title: 'Project',
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: 'category',
      type: 'text',
      rows: 1,
      title: 'Category',
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: 'year',
      type: 'number',
      rows: 1,
      title: 'Year',
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
		{
      name: 'link',
      type: 'text',
      rows: 1,
      title: 'Link',
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
  ],
}
