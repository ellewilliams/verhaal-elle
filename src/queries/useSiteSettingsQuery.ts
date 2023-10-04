import { useStaticQuery, graphql } from "gatsby"

interface QueryResult {
  sanitySiteSettings: {
    title: string
    number: string
    instagramUrl: string
    facebookUrl: string
    email: string
    description: string
    address: string
  }
}

export const useSiteSettingsQuery = (): QueryResult => {
  const data = useStaticQuery(graphql`
    query {
      sanitySiteSettings {
        title
        number
        instagramUrl
        facebookUrl
        email
        description
        address
      }
    }
  `)

  return data
}
