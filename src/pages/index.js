import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"
import ResumeLink from "../components/ResumeLink"

const IndexPage = () => (
  <Layout>
    <SEO title="Kevin McCall Full Stack Software Engineer" />
    <section className="About-section">
      <h1 className="Name">Kevin McCall</h1>
      <h3 className="Subtitle">Full Stack Software Engineer</h3>
      <p className="About">
        Specializing in AWS cloud services and event-driven architecture.
        Professional with React.js and the fundamentals of modern web
        application development.
      </p>
      <p className="About">
        Let's build software together to change millions of lives for the
        better.
      </p>
      <section>
        <button className="About-button">Contact Me</button>
        <button className="About-button">
          <ResumeLink text="View Resume" />
        </button>
      </section>
    </section>
    <Projects />
  </Layout>
)

export default IndexPage
