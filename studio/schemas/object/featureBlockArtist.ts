export default {
  name: "featureBlockArtist",
  title: "Artist/Collaborator – Trio of Images (2x portrait, 1 square)",
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
      name: "imageLeft",
      type: "figure",
      title: "Image Left",
      description: "Large left aligned image (portrait)",
    },
    {
      name: "imageRight",
      type: "figure",
      title: "Image Right",
      description: "Large right aligned image (portrait)",
    },
    {
      name: "imageLeftSquare",
      type: "figure",
      title: "Image Left",
      description: "Small  left aligned image (square)",
    },
    {
      name: "reverseLayout",
      type: "boolean",
      title: "Reverse layout small right algined image (square)",
    },
  ],
  initialValue: {
    reverseLayout: false,
  },
  preview: {
    select: {
      media: "imageLeft",
    },
    prepare: (selection: { media: string }) => {
      const { media } = selection
      return {
        title: "Artist/Collaborator – Trio of Images (2x portrait, 1 square)",
        media: media,
      }
    },
  },
}
