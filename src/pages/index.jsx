import React from 'react'
import Header from '../components/header'
import Container from '../components/layouts/container'
import Layout from '../components/layout'
import MissionIcon from '../components/icons/mission'
import CenterBlock from '../components/common/centerBlock'

const IndexPage = () => (
  <Layout>
    <Header />
    <main
      className="main-content"
      style={{
        paddingTop: '2rem',
        paddingBottom: '2rem',
      }}
    >
      <Container>
        <h2 style={{ textAlign: 'center', fontWeight: 100, color: 'darkblue' }}>
          Helping you do business throughout Iraq & GCC
        </h2>
        <CenterBlock>
          <MissionIcon />
        </CenterBlock>
      </Container>
    </main>
  </Layout>
)

export default IndexPage
