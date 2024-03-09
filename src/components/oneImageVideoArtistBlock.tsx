import * as React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

interface FeatureBlockProps {
  _key: string
  _type: string
  blockTitle: string
  description: string
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

export const OneImageVideoArtistBlock = (props: FeatureBlockProps) => {
  const {
    video,
    imageRight,
  } = props

  return (
    <>
        {video && (
          <div className={`feature-video-landscape block col-span-2`}>
            <video autoPlay loop muted playsInline>
              <source src={video.asset.url} type="video/mp4"/>
            </video>
          </div>
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
