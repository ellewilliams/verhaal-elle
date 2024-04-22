const website = require("../../../website")

const { siteMeta } = website

export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: "email",
      title: "Contact Email",
      type: "string",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: "number",
      title: "Contact Number + Address",
      type: "text",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: "address",
      title: "Location",
      type: "text",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: "facebookUrl",
      title: "Facebook Link",
      type: "string",
      validation: (Rule: { uri: (arg0: { scheme: string[]; }) => any; }) => Rule.uri({
        scheme: ['http', 'https']
      }),
    },
    {
      name: "instagramUrl",
      title: "Instagram Link",
      type: "string",
      validation: (Rule: { uri: (arg0: { scheme: string[]; }) => any; }) => Rule.uri({
        scheme: ['http', 'https']
      }),
    }
  ],
  initialValue: {
    title: siteMeta.title,
    description: siteMeta.description,
  },
  preview: {
    prepare: () => {
      return {
        title: "Settings"
      }
    }
  }
}
