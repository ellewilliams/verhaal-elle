export default {
  name: "indexPage",
  type: "document",
  title: "Home Page",
  fields: [
    {
      name: "displayHeading",
      title: "Display Heading",
      type: "figure",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: "carouselBlocks",
      title: "Carousel Blocks",
      type: "array",
      of: [{ type: "landscapeBlock" }, { type: "portraitBlock" }],
    },
    {
      name: "carouselSpeed",
      title: "Caousel Speed",
      type: "number",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    },
    {
      name: "carouselAutoPlay",
      type: "boolean",
      title: "Carousel Auto Play",
      validation: (Rule: { required: () => void; }) => Rule.required(),
    }
  ],
  initialValue: {
    carouselSpeed: 6000,
    carouselAutoPlay: true,
  },
}
