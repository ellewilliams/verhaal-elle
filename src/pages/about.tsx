import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroll from "../components/locomotiveScroll"
import { useAllAboutPageQuery } from "../queries/useAboutPageQuery"
import { People, PersonProps } from "../components/people"
import { GatsbyImage } from "gatsby-plugin-image"

const AboutPage = () => {
  const { sanityAboutPage } = useAllAboutPageQuery()
  const {
    featureImage,
    heading,
    shortDescription,
    longDescription,
  } = sanityAboutPage

  return (
    <Layout className="about">
      <SEO title="About" />
      <div className="container-fluid container-about">
        <div>
          <div className="row align-items-center row-reverse-md">
            <div className="col-md-6">
              <h1 className="heading text-center">{heading}</h1>
              <p className="short-description text-center">{shortDescription}</p>
              <div className="divider" />
            </div>
            <div className="col-md-6">
              <GatsbyImage
                image={featureImage.asset.gatsbyImageData}
                alt={featureImage.alt}
                loading="eager"
                objectFit="cover"
                className="feature-image"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-8 col-xl-6">
              <p className="long-description">{longDescription}</p>
            </div>
          </div>
          {/* <div className="row">
            <h1 className="heading text-center people-heading">PEOPLE</h1>
              {sanityAboutPage.aboutPagePeople.map((person: PersonProps) => (
                <People {...person} key={person._key} />
              ))}
          </div> */}
        </div>
        <div className="footer-credit"><p>Photography by Bartolomeo Celestino.</p></div>
      </div>
    </Layout>
  )
}

export default AboutPage
