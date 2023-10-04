export default {
  name: "singleLandscapeBlock",
  title: "Single Landscape Image",
  type: "object",
  fields: [
    {
      name: "image",
      type: "figure",
      title: "Image Landscape",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
  ],
  preview: {
    select: {
      media: "image",
    },
    prepare: (selection: { title: string, media: string }) => {
      const { media } = selection
      return {
        title: "Single Landscape Image",
        media: media,
      }
    }
  },
}
