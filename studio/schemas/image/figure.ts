export default {
  name: "figure",
  title: "Image",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      validation: (Rule: { error: (arg0: string) => { (): any; new(): any; required: { (): any; new(): any } } }) =>
        Rule.error("You have to fill out the alternative text.").required(),
      description: "Important for SEO and accessiblity.",
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "caption",
    },
    prepare: (selection: { imageUrl: any }) => {
      const { imageUrl } = selection
      return {
        imageUrl: imageUrl,
        title: "Image"
      }
    }
  },
}
