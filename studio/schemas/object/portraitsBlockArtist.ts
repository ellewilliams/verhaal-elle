export default {
  name: 'portraitsBlockArtist',
  title: 'Artist/Collaborator – Two Portrait Images',
  description: "Layout: 1x1",
  type: 'object',
  fields: [
    {
      name: "blockTitle",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: 'imageLeft',
      type: 'figure',
      title: 'Image Left (portrait)',
      description: "Large left aligned image (portrait)",
    },
    {
      name: 'imageRight',
      type: 'figure',
      title: 'Image Right (portrait)',
      description: "Large right aligned image (portrait)",
    },
    {
      name: 'reverseImages',
      type: 'boolean',
      title: 'Reverse Image/s',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      media: 'imageLeft',
    },
    prepare: (selection: { media: string }) => {
      const { media } = selection
      return {
        title: "Artist/Collaborator – Two Portrait Images",
        media: media
      }
    }
  },
}
