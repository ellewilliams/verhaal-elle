export default {
  name: 'landscapeBlock',
  title: 'Landscape Block',
  type: 'object',
  fields: [
    {
      name: 'imageLeft',
      type: 'figure',
      title: 'Image Left',
      description: "Large left aligned image (landscape)",
    },
    {
      name: 'imageRight',
      type: 'figure',
      title: 'Image Right',
      description: "Small right aligned image (landscape)"
    },
    {
      name: "reverseImages",
      type: "boolean",
      title: "Reverse Image/s",
    }
  ],
  initialValue: {
    reverseImages: false,
  },
  preview: {
    select: {
      imageLeft: 'imageLeft',
      imageRight: 'imageRight',
    },
    prepare: (selection: { imageLeft: object | undefined, imageRight: object | undefined }) => {
      const { imageLeft, imageRight } = selection
      const media = imageLeft ? imageLeft : imageRight
      return {
        title: "Landscape Block",
        media: media,
      }
    }
  },
}
