import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Olá</h1>
    <p>Bem vindo ao novo site da <em>"Perfect Amassados"</em>.</p>
    <p>Ainda em desenvolvimeneto.</p>
    <div style={{ maxWidth: `450px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
