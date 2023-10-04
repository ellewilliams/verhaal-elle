import { useStaticQuery, graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

interface PressQueryResult {
  sanityPressPage: {
    pressPageArticle: {
      image: {
        asset: {
          gatsbyImageData: IGatsbyImageData
        }
        alt: string
      }
      publication: string
      title: string
      link: string
      _key: string
    }[]
    pressPageAward: {
      award: string
      project: string
      category: string
      year: number
      link: string
      _key: string
    }[]
    featureImage: {
      alt: string
      asset: {
        gatsbyImageData: IGatsbyImageData
      }
    }
    heading: string
    shortDescription: string
  }
}

export const usePressPageQuery = (): PressQueryResult => {
  const data = useStaticQuery(graphql`
    query {
      sanityPressPage {
        articles {
          image {
            asset {
              gatsbyImageData(
                placeholder: NONE
                formats: [AUTO, WEBP]
                width: 800
                height: 500
              )
            }
            alt
          }
          publication
          title
          href
          _key
        }
        awards {
          award
          category
          project
          year
          link
          _key
        }
        featureImage {
          asset {
            gatsbyImageData(
              placeholder: NONE
              formats: [AUTO, WEBP]
              width: 800
            )
          }
        }
        heading
        shortDescription
      }
    }
  `)

  return data
}
