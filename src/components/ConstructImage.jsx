import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ConstructImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "construction.png" }) {
          childImageSharp {
            fixed(width: 245, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)

export default ConstructImage
