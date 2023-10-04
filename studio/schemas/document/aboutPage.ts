export default {
  name: "aboutPage",
  type: "document",
  title: "About Page",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: "featureImage",
      title:"Feature Image",
      type: "figure",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: "longDescription",
      title: "Long Description",
      type: "text",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: "peopleHeading",
      title: "People Heading",
      type: "string",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: 'aboutPagePeople',
      title: 'People',
      type: 'array',
      of: [{ type: 'people' }],
      validation: (Rule: { unique: () => any; }) => Rule.unique(),
    },
  ],
  initialValue: {
    heading: "Our Story",
    shortDescription: "Verhaal is an architecture and interior studio founded in 2016 by Neydine Bak and Dewald Struwig in Sydney, Australia.",
    peopleHeading: "People",
  },
}
