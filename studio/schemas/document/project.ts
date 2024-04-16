export default {
  name: "project",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "featureImage",
      title: "Feature Image",
      type: "figure",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
		{
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: "projectDetails",
      title: "Project Details",
      type: "text",
    },
    {
      name: "block",
      title: "Content Blocks",
      description: "Repeatable content layout blocks",
      type: "array",
      of: [
        { type: "portraitsBlock" },
        { type: "singleLandscapeBlock" },
        { type: "featureBlock" },
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'heading',
        maxLength: 200,
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
  orderings: [
    {
      title: "Manual order",
      name: "manualOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      media: "featureImage",
      title: "heading",
    },
  },
  prepare: (selection: { media: string, title: string }) => {
    const { media, title } = selection
    return {
      title: title,
      media: media,
    }
  }
}
