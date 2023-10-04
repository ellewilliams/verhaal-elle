export default {
  name: 'portraitsBlock',
  title: 'Two Portrait Images',
  description: "Layout: 1x1",
  type: 'object',
  fields: [
    {
      name: 'imageLeft',
      type: 'figure',
      title: 'Image Left (Portrait)',
      description: "Large left aligned image (portrait)",
    },
    {
      name: 'imageRight',
      type: 'figure',
      title: 'Image Right (Portrait)',
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
        title: "Two Portrait Images",
        media: media
      }
    }
  },
}
