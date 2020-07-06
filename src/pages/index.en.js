import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi</h1>
    <p>Welcome to the new <em>"Perfect Amassados"</em> site.</p>
    <p>Still in development.</p>
    <div style={{ maxWidth: `450px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
      <Link to="/en/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
