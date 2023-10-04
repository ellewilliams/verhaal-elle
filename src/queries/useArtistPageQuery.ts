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
          ... on SanityFeatureBlockArtist {
            _key
            _type
            description
            imageLeft {
              asset {
                gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP], width: 800)
              }
              alt
            }
            imageLeftSquare {
              asset {
                gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP], aspectRatio: 1, width: 800)
              }
              alt
            }
            imageRight {
              asset {
                gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP], width: 800)
              }
              alt
            }
            reverseLayout
          }
          ... on SanityPortraitsBlockArtist {
            _key
            _type
            reverseImages
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
          }
          ... on SanitySingleLandscapeBlockArtist {
            _key
            _type
            image {
              alt
              asset {
                gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP], width: 800)
              }
            }
          }
        }
        featureImage {
          asset {
            gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP], width: 800)
          }
        }
        heading
        shortDescription
      }
    }
  `)

  return data
}
