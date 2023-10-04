import { useStaticQuery, graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

interface AboutQueryResult {
  sanityAboutPage: {
    aboutPagePeople: {
      image: {
        asset: {
          gatsbyImageData: IGatsbyImageData
        }
        alt: string
      }
      name: string
      role: string
      _key: string
    }[]
    featureImage: {
      alt: string
      asset: {
        gatsbyImageData: IGatsbyImageData
      }
    }
    heading: string
    longDescription: string
    peopleHeading: string
    shortDescription: string
  }
}

export const useAllAboutPageQuery = (): AboutQueryResult => {
  const data = useStaticQuery(graphql`
    query {
      sanityAboutPage {
        aboutPagePeople {
          image {
            asset {
              gatsbyImageData(
                placeholder: NONE
                formats: [AUTO, WEBP]
                aspectRatio: 1
                width: 800
              )
            }
            alt
          }
          name
          role
          _key
        }
        featureImage {
          alt
          asset {
            gatsbyImageData(
              placeholder: NONE
              formats: [AUTO, WEBP]
              width: 800
            )
          }
        }
        heading
        longDescription
        peopleHeading
        shortDescription
      }
    }
  `)

  return data
}
