import { useStaticQuery, graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

interface QueryResult {
  sanityIndexPage: {
    displayHeading: {
      alt: string
      asset: {
        url: string
      }
    }
    carouselSpeed: number
    carouselAutoPlay: boolean
    carouselBlocks: any
  }
}

export const useIndexPageQuery = (): QueryResult => {
  const data = useStaticQuery(graphql`
    query {
      sanityIndexPage {
        displayHeading {
          alt
          asset {
            url
          }
        }
        carouselSpeed
        carouselAutoPlay
        carouselBlocks {
          ... on SanityLandscapeBlock {
            _key
            _type
            imageLeft {
              alt
              asset {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                  width: 1000
                )
              }
            }
            imageRight {
              alt
              asset {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                  width: 800
                )
              }
            }
            reverseImages
          }
          ... on SanityPortraitBlock {
            _key
            _type
            imageLeft {
              alt
              asset {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                  width: 800
                )
              }
            }
            reverseImages
            imageRight {
              alt
              asset {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                  width: 800
                )
              }
            }
						videoRight {
							asset {
								url
								mimeType
							}
						}
          }
        }
      }
    }
  `)

  return data
}
