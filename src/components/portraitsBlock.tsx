import * as React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

interface PortraitsBlockProps {
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
  imageRight: {
    alt: string
    asset: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  reverseImages: boolean
}

export const PortraitsBlock = (props: PortraitsBlockProps) => {
  const { blockTitle, description, reverseImages, imageLeft, imageRight } = props

  return (
    <div className="container-fluid portraits-block">
      {blockTitle && (
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-xl-6 text-container">
            <h1 className="heading text-center">{blockTitle}</h1>
            <p className="text-center description">{description}</p>
          </div>
        </div>
      )}
      <div
        className={`row justify-content-center align-items-center ${
          reverseImages ? "flex-row-reverse" : ""
        }`}
      >
        <div className="col-md-5">
          {imageLeft && (
            <GatsbyImage
              image={imageLeft.asset.gatsbyImageData}
              alt={imageLeft.alt}
              className="feature-image-portrait"
            />
          )}
        </div>
        <div className="col-md-5">
          {imageRight && (
            <GatsbyImage
              image={imageRight.asset.gatsbyImageData}
              alt={imageRight.alt}
              className="feature-image-portrait"
            />
          )}
        </div>
      </div>
    </div>
  )
}
