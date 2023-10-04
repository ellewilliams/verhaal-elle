import { useStaticQuery, graphql } from "gatsby"

interface QueryResult {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

export const useSiteMetadataQuery = (): QueryResult => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return data
}
