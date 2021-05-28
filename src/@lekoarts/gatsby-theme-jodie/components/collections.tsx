/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { PageProps } from "gatsby"
import Img from "gatsby-image"
import Layout from "./layout"
import { ChildImageSharp } from "../types"
import SEO from "./seo"
import GridItem from "./grid-item"
import locales from "../locales"
import { visuallyHidden } from "../styles/utils"

type DataProps = {
  collections: {
    nodes: {
      shortTitle: string
      slug: string
      cover: ChildImageSharp
    }[]
  }
}

const Project: React.FC<PageProps<DataProps>> = ({ data: { collections }, location }) => (
  <Layout>
    <SEO title="Collections" pathname={location.pathname} />
    <h1 sx={visuallyHidden} data-testid="page-title">
      {locales.collections}
    </h1>
    <div
      sx={{
        display: `grid`,
        gridTemplateColumns: [`1fr`, `1fr 1fr`],
        gridAutoRows: `50vw`,
      }}
    >
      {collections.nodes.length > 0 ? (
        collections.nodes.map((project) => (
          <GridItem to={project.slug} key={project.slug} data-testid={project.shortTitle}>
            <Img fluid={project.cover.childImageSharp.fluid} />
            <span>{project.shortTitle}</span>
          </GridItem>
        ))
      ) : (
        <div sx={{ padding: 3 }}>No collections found at the location defined for "collectionsPath"</div>
      )}
    </div>
  </Layout>
)

export default Project
