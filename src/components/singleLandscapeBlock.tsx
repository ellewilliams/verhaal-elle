import * as React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

interface SingleLandscapeBlockProps {
  _key: string
  _type: string
  blockTitle: string
  description: string
  image: {
    alt: string
    asset: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export const SingleLandscapeBlock = (props: SingleLandscapeBlockProps) => {
  const { blockTitle, description, image } = props

  return (
    <div className="container-fluid single-landscape-block">
      {blockTitle && (
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-xl-6 text-container">
            <h1 className="heading text-center">
              <span className="animate-heading">{blockTitle}</span>
            </h1>
            <p className="text-center description">{description}</p>
          </div>
        </div>
      )}
      <div className="row justify-content-center align-items-center">
        <div className="col-md-10">
          <GatsbyImage
            image={image.asset.gatsbyImageData}
            alt={image.alt}
            className="feature-image-landscape"
          />
        </div>
      </div>
    </div>
  )
}
