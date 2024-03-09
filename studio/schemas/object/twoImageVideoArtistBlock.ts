export default {
  name: "twoImageVideoArtistBlock",
  title: "2 images + square video",
  type: "object",
  fields: [
    {
      name: "imageLeft",
      type: "figure",
      title: "Image Left",
      description: "Left",
    },
    {
      name: "imageRight",
      type: "figure",
      title: "Image Right",
      description: "Right",
    },
    {
      name: "video",
      type: "file",
      title: "Video",
      description: "Video",
    },
  ],
  preview: {
    select: {
      media: "imageLeft",
    },
    prepare: (selection: { media: string }) => {
      const { media } = selection
      return {
        title: "2 images + square video",
        media: media,
      }
    },
  },
}
