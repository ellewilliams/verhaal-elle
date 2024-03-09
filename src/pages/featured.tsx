import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroll from "../components/locomotiveScroll"
import { usePressPageQuery } from "../queries/usePressPageQuery"
import { Article, ArticleProps } from "../components/article"
import { Award, AwardProps } from "../components/award"
import { GatsbyImage } from "gatsby-plugin-image"

const PressPage = () => {
  const { sanityPressPage } = usePressPageQuery()
  const {
    featureImage,
    heading,
    shortDescription,
    articles,
    awards,
  } = sanityPressPage

  return (
    <Layout className="press">
      <SEO title="Featured" />
      <div className="container-fluid container-press">
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
                alt="Press"
                loading="eager"
                objectFit="cover"
                className="feature-image"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <h1 className="heading text-center people-heading">Articles</h1>
              {sanityPressPage.articles.map((article: ArticleProps) => (
                <Article {...article} key={article._key} />
              ))}
          </div>
          <div className="row awards">
            <h1 className="heading text-center people-heading">Awards</h1>
            <div className="award awards-header">
              <div className="text-wrapper">
                <p className="award col-md-3">Award</p>
                <p className="project col-md-3">Project</p>
                <p className="category col-md-4">Category</p>
                <p className="year col-md-2">Year</p>
              </div>
            </div>
              {sanityPressPage.awards.map((award: AwardProps) => (
                <Award {...award} key={award._key} />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PressPage
