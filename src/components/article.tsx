import * as React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

export interface ArticleProps {
  _key: string
  image: {
    asset: {
      gatsbyImageData: IGatsbyImageData
    }
    alt: string
  }
  publication: string
  title: string
  href: string
}

export const Article = (props: ArticleProps) => {
  const { _key, image, publication, title, href} = props

  return (
    <div className="col-6 col-md-3 article" key={_key}>
      <a href={href} target="_blank">
        <GatsbyImage image={image.asset.gatsbyImageData} alt={image.alt} />
      </a>
      <div className="text-wrapper">
        <p className="publication">{publication}:</p>
        <p className="title">{title}</p>
        <a className="link" href={href} target="_blank">View article</a>
      </div>
    </div>
  )
}
