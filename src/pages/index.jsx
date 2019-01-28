import React from 'react'
import Header from '../components/header'
import Container from '../components/layouts/container'
import Layout from '../components/layout'
import Services from '../components/home-services'
import Headline from '../components/common/headline'
import HighlightRow from '../components/common/highlightRow'
import '../components/common/TextCenter'
import TextCenter from '../components/common/TextCenter'
import ArroDownGraphicImage from '../images/arow-down-graphic.png'
import OilGas from '../images/oil-gas.jpg'
import { graphql } from 'gatsby'

const IndexPage = props => (
  <Layout>
    <Header img={OilGas} />
    <main
      className="main-content"
      style={{
        paddingTop: '2rem',
      }}
    >
      <Container>
        <TextCenter>
          <p
            style={{
              color: 'rgba(15, 112, 148, 0.95)',
              fontSize: '1.2rem',
            }}
          >
            Helping you do business throughout Iraq & GCC
          </p>
          <img src={ArroDownGraphicImage} alt="" />
        </TextCenter>
      </Container>
      <Container>
        <Headline styledText="Our">Services</Headline>
        <Services images={props.data} />
      </Container>

      <HighlightRow style={{ paddingBottom: '4rem' }}>
        <Container>
          <Headline styledText="Our">Mission</Headline>

          <div id="seated-55fdf2c0" data-artist-id="75c60439-038f-4d0c-8668-64cc24386b07" data-css-version="2">
   </div>
   <script src="https://widget.seated.com/app.js">
   </script>
        </Container>
      </HighlightRow>
    </main>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    construction: file(relativePath: { eq: "construction.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }

    oil: file(relativePath: { eq: "oil-gas.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }

    equipment: file(relativePath: { eq: "equipment.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
    logistics: file(relativePath: { eq: "logistics.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }

    support: file(relativePath: { eq: "life-support.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
  }
`