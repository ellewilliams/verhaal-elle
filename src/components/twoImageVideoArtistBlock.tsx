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
  imageRight: {
    alt: string
    asset: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  video: {
    asset: {
      url: string
    }
  }
}

export const TwoImageVideoArtistBlock = (props: FeatureBlockProps) => {
  const {
    imageLeft,
    imageRight,
    video,
  } = props

  return (
    <>
        <div className="col-span-1 full-mobile">
          {imageLeft && (
            <GatsbyImage
              image={imageLeft.asset.gatsbyImageData}
              alt={imageLeft.alt}
              className={`feature-image-square block`}
            />
          )}
          {imageRight && (
            <GatsbyImage
              image={imageRight.asset.gatsbyImageData}
              alt={imageRight.alt}
              className={`feature-image-square block`}
            />
          )}
        </div>
        {video && (
          <div className={`feature-video-square block col-span-2`}>
            <video autoPlay loop muted playsInline>
              <source src={video.asset.url} type="video/mp4"/>
            </video>
          </div>
        )}
    </>
  )
}
