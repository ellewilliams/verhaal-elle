import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { PortraitsBlock } from "../components/portraitsBlock"
import { SingleLandscapeBlock } from "../components/singleLandscapeBlock"
import { FeatureBlock } from "../components/featureBlock"
import { GatsbyImage } from "gatsby-plugin-image"

export default function ArtistsPage(props: any) {
  const { data } = props
  const { heading, shortDescription, featureImage } = data.sanityArtistPage;
  const blocks = data.sanityArtistPage.blocks

  return (
    <Layout className="artists">
      <SEO title="Artists" />
      <div className="container-fluid container-artists">
        <div>
          <div className="row align-items-center row-reverse-md">
            <div className="col-md-6">
              <h1 className="heading text-center">{heading}</h1>
              <p className="short-description text-center">{shortDescription}</p>
              <div className="divider" />
            </div>
            <div className="col-md-6">
              <GatsbyImage
                image={featureImage.asset.gatsbyImageData}
                alt={featureImage.alt}
                loading="eager"
                objectFit="cover"
                className="feature-image"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="content-blocks">
              {blocks.length > 0 && blocks.map((block: any) => {
                if (block._type === "portraitsBlockArtist") {
                  return (
                    <PortraitsBlock {...block} key={block._key} />
                  )
                }
                if (block._type === "singleLandscapeBlockArtist") {
                  return (
                    <SingleLandscapeBlock {...block} key={block._key} />
                  )
                }
                if (block._type === "featureBlockArtist") {
                  return (
                    <FeatureBlock {...block} key={block._key} />
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
        ... on SanityFeatureBlockArtist {
          _key
          _type
          blockTitle
          description
          imageLeft {
            asset {
              gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP])
            }
            alt
          }
          imageLeftSquare {
            asset {
              gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP], aspectRatio: 1)
            }
            alt
          }
          imageRight {
            asset {
              gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP])
            }
            alt
          }
          reverseLayout
        }
        ... on SanityPortraitsBlockArtist  {
          _key
          _type
          blockTitle
          description
          reverseImages
          imageLeft {
            alt
            asset {
              gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP])
            }
          }
          imageRight {
            alt
            asset {
              gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP])
            }
          }
        }
        ... on SanitySingleLandscapeBlockArtist  {
          _key
          _type
          blockTitle
          description
          image {
            alt
            asset {
              gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP])
            }
          }
        }
      }
      featureImage {
        asset {
          gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP])
        }
      }
      heading
      shortDescription
    }
  }
`
