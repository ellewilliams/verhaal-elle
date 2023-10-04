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

  return (
    <Layout className="home">
      <SEO title="Home" />
      <div className="container-fluid container-display-heading">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-md-7 col-sm-10 col-10">
            <img src={displayHeading.asset.url} alt={displayHeading.alt} />
          </div>
        </div>
      </div>
      <div className="container-fluid container-marquee p-0" ref={marqueeWrapperRef} style={{ height: height }}>
        <div className="marquee-one">
          {carouselBlocks.map((block: any, i: number) => {
            if (block._type === "portraitBlock") {
              return (
                <div className="container-fluid" key={block._key}>
                  <div
                    className={`row portrait align-items-center justify-content-around ${
                      block.reverseImages ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="col-6 col-md-5 mb-4 marquee-item">
                      {block.imageLeft && (
                        <GatsbyImage
                          image={block.imageLeft.asset.gatsbyImageData}
                          alt={block.imageLeft.alt}
                          loading="eager"
                          objectFit="cover"
                        />
                      )}
                    </div>
                    <div className="col-4 offset-1 col-md-3 col-md-offset-2 mb-4 marquee-item">
                      {block.imageRight && (
                        <GatsbyImage
                          image={block.imageRight.asset.gatsbyImageData}
                          alt={block.imageRight.alt}
                          loading="eager"
                          objectFit="cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              )
            }
            return (
              <div className="container-fluid p-0" key={block._key}>
                <div className={`row landscape ${block.reverseImages ? "flex-row-reverse" : ""}`}>
                  <div className="col-8 col-md-7 mb-4 marquee-item">
                    {block.imageLeft && (
                      <GatsbyImage
                        image={block.imageLeft.asset.gatsbyImageData}
                        alt={block.imageLeft.alt}
                        loading="eager"
                        objectFit="cover"
                      />
                    )}
                  </div>
                  <div className="col-7 offset-5 col-md-5 offset-md-6 push-md-0 mb-4 marquee-item">
                    {block.imageRight && (
                      <GatsbyImage
                        image={block.imageRight.asset.gatsbyImageData}
                        alt={block.imageRight.alt}
                        loading="eager"
                        objectFit="cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="marquee-two">
          {carouselBlocks.map((block: any, i: number) => {
            if (block._type === "portraitBlock") {
              return (
                <div className="container-fluid" key={block._key}>
                  <div
                    className={`row portrait align-items-center justify-content-around ${
                      block.reverseImages ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="col-6 col-md-5 mb-4 marquee-item">
                      {block.imageLeft && (
                        <GatsbyImage
                          image={block.imageLeft.asset.gatsbyImageData}
                          alt={block.imageLeft.alt}
                          loading="eager"
                          objectFit="cover"
                        />
                      )}
                    </div>
                    <div className="col-4 offset-1 col-md-3 col-md-offset-2 mb-4 marquee-item">
                      {block.imageRight && (
                        <GatsbyImage
                          image={block.imageRight.asset.gatsbyImageData}
                          alt={block.imageRight.alt}
                          loading="eager"
                          objectFit="cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              )
            }
            return (
              <div className="container-fluid p-0" key={block._key}>
                <div className={`row landscape ${block.reverseImages ? "flex-row-reverse" : ""}`}>
                  <div className="col-8 col-md-7 mb-4 marquee-item">
                    {block.imageLeft && (
                      <GatsbyImage
                        image={block.imageLeft.asset.gatsbyImageData}
                        alt={block.imageLeft.alt}
                        loading="eager"
                        objectFit="cover"
                      />
                    )}
                  </div>
                  <div className="col-7 offset-5 col-md-5 offset-md-6 push-md-0 mb-4 marquee-item">
                    {block.imageRight && (
                      <GatsbyImage
                        image={block.imageRight.asset.gatsbyImageData}
                        alt={block.imageRight.alt}
                        loading="eager"
                        objectFit="cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
