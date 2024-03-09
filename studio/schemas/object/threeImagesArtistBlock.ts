export default {
  name: "threeImagesArtistBlock",
  title: "3 square images",
  type: "object",
  fields: [
    {
      name: "imageLeft",
      type: "figure",
      title: "Image Left",
      description: "Left",
    },
    {
      name: "imageMiddle",
      type: "figure",
      title: "Image Middle",
      description: "Middle",
    },
    {
      name: "imageRight",
      type: "figure",
      title: "Image Right",
      description: "Right",
    },
  ],
  preview: {
    select: {
      media: "imageLeft",
    },
    prepare: (selection: { media: string }) => {
      const { media } = selection
      return {
        title: "3 square images",
        media: media,
      }
    },
  },
}
