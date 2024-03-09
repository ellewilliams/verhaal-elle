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
  imageMiddle: {
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
}

export const ThreeImagesArtistBlock = (props: FeatureBlockProps) => {
  const {
    imageLeft,
    imageMiddle,
    imageRight,
  } = props

  return (
    <>
        {imageLeft && (
          <GatsbyImage
            image={imageLeft.asset.gatsbyImageData}
            alt={imageLeft.alt}
            className={`feature-image-square block col-span-1`}
          />
        )}
        {imageMiddle && (
          <GatsbyImage
            image={imageMiddle.asset.gatsbyImageData}
            alt={imageMiddle.alt}
            className={`feature-image-square block col-span-1`}
          />
        )}
        {imageRight && (
          <GatsbyImage
            image={imageRight.asset.gatsbyImageData}
            alt={imageRight.alt}
            className={`feature-image-square block col-span-1`}
          />
        )}
    </>
  )
}
