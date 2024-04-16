const path = require('path')

// Mapbox
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@mapbox/,
            use: loaders.null(),
          },
          {
            test: /mapbox-gl/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

// Locomotive
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projects = await graphql(`
    {
      allSanityProject {
        edges {
          next {
            id
            slug {
              current
            }
            featureImage {
              asset {
                gatsbyImageData(
                  placeholder: NONE
                  formats: [AUTO, WEBP]
                )
              }
              alt
            }
            heading
						location
          }
          previous {
            id
            slug {
              current
            }
            featureImage {
              asset {
                gatsbyImageData(
                  placeholder: NONE
                  formats: [AUTO, WEBP]
                )
              }
              alt
            }
            heading
          }
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)
  projects.data.allSanityProject.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: `projects/${node.slug.current}`,
      component: path.resolve('./src/templates/project.tsx'),
      context: {
        id: node.id,
        next: next,
        previous: previous,
      },
    })
  })
}
