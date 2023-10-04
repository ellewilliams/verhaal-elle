import { useStaticQuery, graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

export type ProjectQueryNodes = {
  id: string
  featureImage: {
    asset: {
      gatsbyImageData: IGatsbyImageData
    }
    alt: string
  }
  slug: {
    current: string
  }
  heading: string
}

interface ProjectQueryResult {
  allSanityProject: {
    nodes: ProjectQueryNodes[]
  }
}

export const useAllProjectQuery = (): ProjectQueryResult => {
  const data = useStaticQuery(graphql`
    query {
      allSanityProject(sort: { fields: [order], order: ASC }) {
        nodes {
					order
          id
          featureImage {
            asset {
              gatsbyImageData(
                placeholder: NONE
                formats: [AUTO, WEBP]
                width: 800
              )
            }
            alt
          }
          slug {
            current
          }
          heading
        }
      }
    }
  `)

  return data
}
