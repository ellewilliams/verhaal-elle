import * as React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

export interface PersonProps {
  _key: string
  image: {
    asset: {
      gatsbyImageData: IGatsbyImageData
    }
    alt: string
  }
  name: string
  role: string
}

export const People = (props: PersonProps) => {
  const { _key, image, name, role } = props

  return (
    <div className="col-6 col-md-3 person" key={_key}>
      <GatsbyImage image={image.asset.gatsbyImageData} alt={image.alt} />
      <p className="name">{name}</p>
      <p className="role">{role}</p>
    </div>
  )
}
