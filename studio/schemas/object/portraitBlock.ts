export default {
  name: "portraitBlock",
  title: "Portrait Block",
  type: "object",
  fields: [
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
      description: "Small right aligned image (square)",
    },
		{
      name: 'videoRight',
      type: 'file',
      title: 'Video Right (Portrait)',
      description: "Upload a video instead of an image",
      options: {
        accept: 'video/*'
      },
    },
    {
      name: "reverseImages",
      type: "boolean",
      title: "Reverse Image/s",
    },
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
        title: "Portrait Block",
        media: media,
      }
    }
  },
}
