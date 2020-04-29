import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ResumeLink = ({ text }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(name: { eq: "resume-kevin-mccall" }) {
        publicURL
      }
    }
  `)
  return (
    <a href={data.file.publicURL} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  )
}

export default ResumeLink
