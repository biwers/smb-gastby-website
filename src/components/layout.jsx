import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Container, { Row } from './layouts/container'
import Navbar from './nav'
import Header from './header'
import './layout.scss'

const description =
    'SMB is a privately owned commercial service company based in Kurdistan, Iraq. We are specialists in the delivery of consultancy and bespoke, custom-built service solutions. Our key objectives as an organisation is customer and employee satisfaction.',
  keywords =
    'Smb Group, smb, iraq, smb iraq, kurdistan, company,construction, oil, gas, oil & gas, support, life support, food,equipment, security,construct'
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
            { name: 'author', content: 'Shahram Mebshar' },
          ]}
        >
          <html lang="en" className="no-js" />
          <p>ssds</p>
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          <Row>
            <Navbar />
          </Row>
          {children}
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
