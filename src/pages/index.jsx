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
const IndexPage = () => (
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
        <Services />
      </Container>

      <Container>
        <Headline styledText="Our">Mission</Headline>
        <HighlightRow style={{ maxWidth: '500px', margin: '0 auto' }}>
          <p style={{ textAlign: 'center' }}>
            {' '}
            <strong>SMB</strong> services will ensure value for our stakeholders
            by utilizing skilled management, innovative solutions and effortless
            teamwork on our projects, that leave a lasting impact in those
            regions in which operate.
          </p>
        </HighlightRow>
      </Container>
    </main>
  </Layout>
)

export default IndexPage
