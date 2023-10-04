export default {
  name: "pressPage",
  type: "document",
  title: "Press Page",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: "featureImage",
      title:"Feature Image",
      type: "image",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: 'articles',
      title: 'Articles',
      type: 'array',
      of: [{ type: 'article' }],
      validation: (Rule: { unique: () => any; }) => Rule.unique(),
    },
    {
      name: 'awards',
      title: 'Awards',
      type: 'array',
      of: [{ type: 'award' }],
      validation: (Rule: { unique: () => any; }) => Rule.unique(),
    },
    
  ],
  initialValue: {
    heading: "Press",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec tincidunt sem. Sed sodales nunc non ullamcorper semper.",
  },
}
