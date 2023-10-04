export default {
  name: "singleLandscapeBlockArtist",
  title: "Artist/Collaborator – Single Landscape Image",
  type: "object",
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
        title: "Artist/Collaborator – Single Landscape Image",
        media: media,
      }
    }
  },
}
