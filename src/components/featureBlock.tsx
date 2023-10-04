import * as React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

interface FeatureBlockProps {
  _key: string
  _type: string
  blockTitle: string
  description: string
  imageLeft: {
    alt: string
    asset: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  imageLeftSquare: {
    alt: string
    asset: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  imageRight: {
    alt: string
    asset: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  reverseLayout: boolean
}

export const FeatureBlock = (props: FeatureBlockProps) => {
  const {
    blockTitle,
    description,
    imageLeft,
    imageLeftSquare,
    imageRight,
    reverseLayout,
  } = props

  return (
    <div className="container-fluid feature-block">
      <div className="row justify-content-center align-items-center feature-divider">
        <div className="divider-start" />
      </div>
      {description && (
        <div className="row justify-content-center align-items-center">
          <div
            className={`col-12 col-md-8 col-xl-6 text-container ${
              blockTitle ? "col-lg-6" : "col-lg-8"
            }`}
          >
            {blockTitle && (
              <h1 className="heading text-center">
                <span className="animate-heading">{blockTitle}</span>
              </h1>
            )}
            <p className="text-center description">{description}</p>
          </div>
        </div>
      )}
      <div
        className={`row justify-content-center align-items-center ${
          reverseLayout ? "flex-row-reverse" : ""
        }`}
      >
        <div className="col-md-5 col-lg-4">
        {imageLeft && (
            <GatsbyImage
              image={imageLeft.asset.gatsbyImageData}
              alt={imageLeft.alt}
              className={`feature-image-left-portrait col-9 col-md-4 ${
                reverseLayout ? "d-none" : "d-md-inline-block"
              }`}
            />
          )}
          {imageRight && (
            <GatsbyImage
              image={imageRight.asset.gatsbyImageData}
              alt={imageRight.alt}
              className={`feature-image-left-portrait col-9 col-md-4 ${
                reverseLayout ? "d-none d-md-inline-block" : "d-none"
              }`}
            />
          )}
          {imageRight && (
                <GatsbyImage
                  image={imageRight.asset.gatsbyImageData}
                  alt={imageRight.alt}
                  className={`feature-image-right-portrait col-9 col-md-4 ${
                    reverseLayout ? "d-md-inline-block d-md-none align-right text-right" : "d-none"
                  }`}
                />
              )}
          <div
            className={`row mobile-right ${
              reverseLayout ? "justify-content-start feature-square-left" : "justify-content-end feature-square-right"
            } align-items-center`}
          >
            <div className="col-md-9">
              {imageLeftSquare && (
                <GatsbyImage
                  image={imageLeftSquare.asset.gatsbyImageData}
                  alt={imageLeftSquare.alt}
                  className="feature-image-left-square d-none d-md-inline-block col-7 col-md-3"
                />
              )}
              {imageRight && (
                <GatsbyImage
                  image={imageRight.asset.gatsbyImageData}
                  alt={imageRight.alt}
                  className={`feature-image-right-portrait col-9 col-md-4 ${
                    reverseLayout ? "d-none" : "d-md-inline-block d-md-none"
                  }`}
                />
              )}
            </div>
          </div>
        </div>
        <div className="col-md-5 col-lg-4" data-scroll data-scroll-speed="1">
          {imageRight && (
            <GatsbyImage
              image={imageRight.asset.gatsbyImageData}
              alt={imageRight.alt}
              className={`feature-image-right-portrait col-9 col-md-4 ${
                reverseLayout ? "d-none" : "d-none d-md-inline-block"
              }`}
            />
          )}
          {imageLeft && (
            <GatsbyImage
              image={imageLeft.asset.gatsbyImageData}
              alt={imageLeft.alt}
              className={`feature-image-left-portrait col-9 col-md-4 ${
                reverseLayout ? "d-md-inline-block" : "d-none"
              }`}
            />
          )}
          {imageLeftSquare && (
            <GatsbyImage
              image={imageLeftSquare.asset.gatsbyImageData}
              alt={imageLeftSquare.alt}
              className="feature-image-left-square d-md-none col-7 col-md-3"
            />
          )}
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="divider-end" />
      </div>
    </div>
  )
}
