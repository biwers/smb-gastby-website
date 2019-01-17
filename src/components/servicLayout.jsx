import React from 'react'
import Layout from './layout'
import HeaderHero from './common/headerHero'
import Container from './layouts/container'
import Button from './common/button'
import { Link } from 'gatsby'

export default ({ children, title, img, isNotService, hideContactBtn }) => (
  <Layout>
    <HeaderHero img={img} title={title} isNotService={isNotService} />

    <main className="main-content">
      <Container>
        <div className="flex-grid">
          {!isNotService && (
            <aside className="service-list">
              <h3 className="service-list__title">Services</h3>
              <nav className="nav-services">
                <Link to="/services/construction">Construction</Link>
                <Link to="/services/logistics">Logistics</Link>
                <Link to="/services/oilgas">Oil & Gas</Link>
                <Link to="/services/equipment">Equipment</Link>
                <Link to="/services/lifesupport">Life Support</Link>
              </nav>
            </aside>
          )}

          <article className="service-desc">
            {children}
            {!hideContactBtn && (
              <Button title="Contact us" to="/contact" type="a" />
            )}
          </article>
        </div>
      </Container>
    </main>
  </Layout>
)
