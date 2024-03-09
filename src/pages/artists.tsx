import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { OneImageVideoArtistBlock } from "../components/oneImageVideoArtistBlock"
import { TwoImageVideoArtistBlock } from "../components/twoImageVideoArtistBlock"
import { ThreeImagesArtistBlock } from "../components/threeImagesArtistBlock"
import { GatsbyImage } from "gatsby-plugin-image"

export default function ArtistsPage(props: any) {
  const { data } = props
  const { heading, shortDescription, featureImage } = data.sanityArtistPage;
  const blocks = data.sanityArtistPage.blocks

  return (
    <Layout className="artists">
      <SEO title="Artists" />
      <div className="container-fluid container-artists">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <h1 className="heading text-center">{heading}</h1>
            <p className="short-description text-center">{shortDescription}</p>
             <div className="divider" />
          </div>
        </div>
        <div>
          <div className="row">
            <div className="content-blocks">
              {blocks.length > 0 && blocks.map((block: any) => {
                if (block._type === "oneImageVideoArtistBlock") {
                  return (
                    <OneImageVideoArtistBlock {...block} key={block._key} />
                  )
                }
                if (block._type === "twoImageVideoArtistBlock") {
                  return (
                    <TwoImageVideoArtistBlock {...block} key={block._key} />
                  )
                }
                if (block._type === "threeImagesArtistBlock") {
                  return (
                    <ThreeImagesArtistBlock {...block} key={block._key} />
                  )
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    sanityArtistPage {
      blocks {
        ... on SanityThreeImagesArtistBlock {
          _key
          _type
          imageLeft {
            asset {
              gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP], aspectRatio: 1)
            }
            alt
          }
          imageMiddle {
            asset {
              gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP], aspectRatio: 1)
            }
            alt
          }
          imageRight {
            asset {
              gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP], aspectRatio: 1)
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
`
