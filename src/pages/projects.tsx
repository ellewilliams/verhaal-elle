import React, { MutableRefObject, useEffect, useRef } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useOnScreen } from "../hooks/useOnScreen"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useAllProjectQuery, ProjectQueryNodes } from "../queries/useAllProjectQuery"

const ProjectsPage = () => {
  const { allSanityProject } = useAllProjectQuery()
  const ref: any = useRef()
  const onScreen: boolean = useOnScreen(ref)

  return (
    <Layout className="projects">
      <SEO title="Projects" />
      <div className="container-projects container-fluid">
          {allSanityProject.nodes.map((project: ProjectQueryNodes) => (
            <div className="project" key={project.id}>
              <Link to={project.slug.current}>
                <GatsbyImage
                  image={project.featureImage.asset.gatsbyImageData}
                  alt={project.featureImage.alt}
                  className="feature-image"
                />
                <div className="text-wrapper">
                  <h1 className="text-center heading">{project.heading} </h1>
									<p className="text-center paragraph">{project.location}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </Layout>
  )
}

export default ProjectsPage
