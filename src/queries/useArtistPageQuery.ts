import { useStaticQuery, graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

interface ArtistQueryResult {
  sanityArtistPage: {
    artistPageArtist: {
      name: string
      _key: string
      description: string
      href: string
      image: {
        asset: {
          gatsbyImageData: IGatsbyImageData
        }
        alt: string
      }
    }
    blocks: any
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

export const useArtistPageQuery = (): ArtistQueryResult => {
  const data = useStaticQuery(graphql`
    query {
      sanityArtistPage {
       
        blocks {
          ... on SanityThreeImagesArtistBlock {
            _key
            _type
            imageLeft {
              asset {
                gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP], aspectRatio: 1, width: 800)
              }
              alt
            }
            imageMiddle {
              asset {
                gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP], aspectRatio: 1, width: 800)
              }
              alt
            }
            imageRight {
              asset {
                gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP], aspectRatio: 1, width: 800)
              }
              alt
            }
          }
          ... on SanityTwoImageVideoArtistBlock {
            _key
            _type
            imageLeft {
              alt
              asset {
                gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP], width: 800)
              }
            }
            imageRight {
              alt
              asset {
                gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP], width: 800)
              }
            }
            video {
              asset {
                url
              }
            }
          }
          ... on SanityOneImageVideoArtistBlock {
            _key
            _type
            imageRight {
              alt
              asset {
                gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP], width: 800)
              }
            }
            video {
              asset {
                url
              }
            }
          }
        }
        heading
        shortDescription
      }
    }
  `)

  return data
}
