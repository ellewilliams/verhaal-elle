export default {
  name: "artistPage",
  type: "document",
  title: "Artist Page",
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
      name: "blocks",
      title: "Content Blocks",
      description: "Repeatable content layout blocks",
      type: "array",
      of: [
        { type: "oneImageVideoArtistBlock"},
        { type: "twoImageVideoArtistBlock"},
        { type: "threeImagesArtistBlock"},
      ],
    },
    
  ],
  initialValue: {
    heading: "Artists & Collaborators",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec tincidunt sem. Sed sodales nunc non ullamcorper semper.",
  },
}
