import React, { MutableRefObject, useEffect, useRef } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useHorizontalScroll } from "../hooks/useHorizontalScroll"
import { useOnScreen } from "../hooks/useOnScreen"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useAllProjectQuery, ProjectQueryNodes } from "../queries/useAllProjectQuery"

const ProjectsPage = () => {
  const { allSanityProject } = useAllProjectQuery()
  const scrollRef: any = useHorizontalScroll()
  const ref: any = useRef()
  const onScreen: boolean = useOnScreen(ref)

  return (
    <Layout className="projects">
      <SEO title="Projects" />
      <div className="container-fluid container-projects">
        <div className="slide-area" ref={scrollRef}>
          <div ref={ref} />
          <div className="slide">
            {allSanityProject.nodes.map((project: ProjectQueryNodes) => (
              <div className="column" key={project.id}>
                <Link to={project.slug.current}>
                  <GatsbyImage
                    image={project.featureImage.asset.gatsbyImageData}
                    alt={project.featureImage.alt}
                    className="feature-image"
                  />
                  <h1 className="text-center heading">{project.heading} </h1>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={`scroll-notice ${!onScreen ? "hide-scroll-notice" : ""}`}>
          <p>Scroll to see more</p>
          <svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L15 15L29 1" stroke="black" />
          </svg>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage
