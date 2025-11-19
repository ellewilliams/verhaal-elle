import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { useIndexPageQuery } from "../queries/useIndexPageQuery"
import useDimensions from "react-use-dimensions"

const IndexPage = () => {
  const { sanityIndexPage } = useIndexPageQuery()
  const carouselBlocks = sanityIndexPage.carouselBlocks
  const displayHeading = sanityIndexPage.displayHeading
  const [marqueeWrapperRef, { height }] = useDimensions()

  // Helper: render right-side image OR video safely
  const renderRightMedia = (block: any) => {
    const videoUrl = block?.videoRight?.asset?.url
    const imageData = block?.imageRight?.asset?.gatsbyImageData
    const alt = block?.imageRight?.alt || ""

    if (videoUrl) {
      return (
        <video
          src={videoUrl}
          className="feature-image-portrait"
          playsInline
          autoPlay
          muted
          loop
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )
    }

    if (imageData) {
      return (
        <GatsbyImage
          image={imageData}
          alt={alt}
          loading="lazy"
          objectFit="cover"
        />
      )
    }

    return null
  }

  // Helper: render landscape block with dynamic column layout
  const renderLandscapeBlock = (block: any, key: string) => {
    const hasLeftImage = block.imageLeft?.asset?.gatsbyImageData
    const hasRightMedia = block.imageRight?.asset?.gatsbyImageData || block.videoRight?.asset?.url
    const isSingleImage = (hasLeftImage && !hasRightMedia) || (!hasLeftImage && hasRightMedia)

    return (
      <div className="container-fluid p-0" key={key}>
        <div className={`row landscape ${block.reverseImages ? "flex-row-reverse" : ""}`}>
          {hasLeftImage && (
            <div className={`mb-4 marquee-item ${
              isSingleImage
                ? "col-8 offset-2 col-md-6 offset-md-1"
                : "col-8 col-md-6"
            }`}>
              <GatsbyImage
                image={block.imageLeft.asset.gatsbyImageData}
                alt={block.imageLeft.alt}
                loading="lazy"
                objectFit="cover"
              />
            </div>
          )}
          {hasRightMedia && (
            <div className={`mb-4 marquee-item ${
              isSingleImage
                ? "col-8 offset-2 col-md-6 offset-md-3"
                : "col-7 offset-5 col-md-5 offset-md-7 push-md-0 col-xl-4"
            }`}>
              {renderRightMedia(block)}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <Layout className="home">
      <SEO title="Verhaal: Stories, Formed." noTemplate />
      <div className="container-fluid container-display-heading">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-md-7 col-sm-10 col-10">
            <img src={displayHeading.asset.url} alt={displayHeading.alt} />
          </div>
        </div>
      </div>
      <div
        className="container-fluid container-marquee p-0"
        ref={marqueeWrapperRef}
        style={{ height: height }}
      >
        <div className="marquee">
          {[...carouselBlocks, ...carouselBlocks].map((block: any, index: number) => {
            const key = `${block._key}-${index}`

            if (block._type === "portraitBlock") {
              return (
                <div className="container-fluid" key={key}>
                  <div
                    className={`row portrait align-items-center justify-content-around ${
                      block.reverseImages ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="col-6 col-md-5 mb-4 marquee-item">
                      {block.imageLeft?.asset?.gatsbyImageData && (
                        <GatsbyImage
                          image={block.imageLeft.asset.gatsbyImageData}
                          alt={block.imageLeft.alt}
                          loading="lazy"
                          objectFit="cover"
                        />
                      )}
                    </div>
                    <div className="col-4 offset-1 col-md-3 col-md-offset-2 mb-4 marquee-item">
                      {renderRightMedia(block)}
                    </div>
                  </div>
                </div>
              )
            }

            return renderLandscapeBlock(block, key)
          })}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
