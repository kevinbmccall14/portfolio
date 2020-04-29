import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Audio from "./audio"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
        edges {
          node {
            frontmatter {
              title
              slug
              url
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  `)
  const projects = data.allMarkdownRemark.edges

  return (
    <section className="Projects-section">
      <h2 className="Projects-header">Professional Projects</h2>
      <ul className="Projects">
        {projects.map(({ node: { frontmatter: project, html } }) => (
          <li>
            <h3 className="Project-title">{project.title}</h3>
            <Image
              fluid={project.image.childImageSharp.fluid}
              alt={project.title}
            />
            <div
              className="Project-description"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Audio />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
