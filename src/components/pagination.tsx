import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

interface PaginationProps {
  next: {
    featureImage: {
      alt: string
      asset: {
        gatsbyImageData: IGatsbyImageData
      }
    }
    heading: string
    id: string
    slug: {
      current: string
    }
  }
  previous: {
    featureImage: {
      alt: string
      asset: {
        gatsbyImageData: IGatsbyImageData
      }
    }
    heading: string
    id: string
    slug: {
      current: string
    }
  }
}

export const Pagination = (props: PaginationProps) => {
  const { previous, next } = props

  return (
    <div className="container-fluid pagination">
      <div className="row justify-content-center align-items-center">
        <div className="col-10 col-md-6">
          <p className="text-center pagination-subheading subheading mb-4">{next ? 'Next' : 'Previous'} Project:</p>
            <Link to={`/projects/${next ? next.slug.current : previous.slug.current}`}>
              {next ? (
                <GatsbyImage
                  image={next.featureImage.asset.gatsbyImageData}
                  alt={next.featureImage.alt}
                  className="pagination-image"
                />
              ) : (
                <GatsbyImage
                  image={previous.featureImage.asset.gatsbyImageData}
                  alt={previous.featureImage.alt}
                  className="pagination-image"
                />
              )}
              <h2 className="text-center pagination-heading">{next ? next.heading : previous.heading}</h2>
            </Link>
        </div>
      </div>
    </div>
  )
}
