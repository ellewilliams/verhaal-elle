import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { PortraitsBlock } from "../components/portraitsBlock"
import { SingleLandscapeBlock } from "../components/singleLandscapeBlock"
import { FeatureBlock } from "../components/featureBlock"
import { Pagination } from "../components/pagination"
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

export default function Project(props: any) {
  const { data, pageContext } = props
  const { next, previous } = pageContext
  const project = data.sanityProject
  const blocks = project.block // TODO: Rename to plural 'blocks'

  return (
    <Layout className="project">
      <SEO title={project.heading} />
      <Controller>
        <Scene
          indicators={false}
          duration="250%"
          pin={false}
          triggerHook="onLeave"
          reverse={true}
        >
          <Timeline wrapper={<div className="parallax" />}>
            <Tween
              position="0"
              from={{
                yPercent: 0,
              }}
              to={{
                yPercent: 40,
              }}
              ease="none"
            >
              <div className="imageWrapper">
                <GatsbyImage
                image={project.featureImage.asset.gatsbyImageData}
                alt={project.featureImage.alt}
                className="feature-image"
                />
              </div>
            </Tween>
          </Timeline>
        </Scene>
      </Controller>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-10 col-lg-8">
            <h1 className="text-center heading">{project.heading}</h1>
            <p className="text-center description">{project.description}</p>
            <p className="text-center details">{project.projectDetails}</p>
          </div>
        </div>
      </div>
      {blocks.length > 0 && blocks.map((block: any) => {
        if (block._type === "portraitsBlock") {
          return (
            <PortraitsBlock {...block} key={block._key} />
          )
        }

        if (block._type === "singleLandscapeBlock") {
          return (
            <SingleLandscapeBlock {...block} key={block._key} />
          )
        }

        if (block._type === "featureBlock") {
          return (
            <FeatureBlock {...block} key={block._key} />
          )
        }
      })}
      <Pagination next={next} previous={previous} />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    sanityProject(id: { eq: $id }) {
      id
      featureImage {
        asset {
          gatsbyImageData(
            placeholder: NONE
            formats: [AUTO, WEBP]
            width: 1400
          )
        }
        alt
      }
      slug {
        current
      }
      heading
			location
      description
      projectDetails
      block {
        ... on SanityFeatureBlock {
          _key
          _type
          description
          imageLeft {
            asset {
              gatsbyImageData(
                placeholder: NONE
                formats: [AUTO, WEBP]
                width: 800
              )
            }
            alt
          }
          imageLeftSquare {
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
          imageRight {
            asset {
              gatsbyImageData(
                placeholder: NONE
                formats: [AUTO, WEBP]
                width: 800
              )
            }
            alt
          }
          reverseLayout
        }
        ... on SanityPortraitsBlock {
          _key
          _type
          reverseImages
          imageLeft {
            alt
            asset {
              gatsbyImageData(
                placeholder: NONE
                formats: [AUTO, WEBP]
                width: 800
              )
            }
          }
          imageRight {
            alt
            asset {
              gatsbyImageData(
                placeholder: NONE
                formats: [AUTO, WEBP]
                width: 800
              )
            }
          }
        }
        ... on SanitySingleLandscapeBlock {
          _key
          _type
          image {
            alt
            asset {
              gatsbyImageData(
                placeholder: NONE
                formats: [AUTO, WEBP]
                width: 1200
              )
            }
          }
        }
      }
    }
  }
`
