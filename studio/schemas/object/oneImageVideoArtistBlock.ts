export default {
  name: "oneImageVideoArtistBlock",
  title: "1 image + landscape video",
  type: "object",
  fields: [
    {
      name: "video",
      type: "file",
      title: "Video",
      description: "Video",
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
      media: "imageRight",
    },
    prepare: (selection: { media: string }) => {
      const { media } = selection
      return {
        title: "1 image + landscape video",
        media: media,
      }
    },
  },
}
