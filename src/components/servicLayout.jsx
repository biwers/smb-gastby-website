import React from 'react'
import Layout from './layout'
import HeaderHero from './common/headerHero'
import Container from './layouts/container'
import Button from './common/button'
export default ({ children, title, img, isNotService }) => (
  <Layout>
    <HeaderHero img={img} title={title} isNotService={isNotService} />
    <main className="main-content">
      <Container>
        <article className="service-desc">
          {children}
          <Button title="Contact us" to="/contact" />
        </article>
      </Container>
    </main>
  </Layout>
)
