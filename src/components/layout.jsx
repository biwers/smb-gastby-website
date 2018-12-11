import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Navbar from './nav'
import Footer from './layouts/footer'
import './layout.scss'

const description =
    'SMB is a privately owned commercial service company based in Kurdistan, Iraq. We are specialists in the delivery of consultancy and bespoke, custom-built service solutions. Our key objectives as an organisation is customer and employee satisfaction.',
  keywords =
    'Smb Group, smb, iraq, smb iraq, kurdistan, company,construction, oil, gas, oil & gas, support, life support, food,equipment, security,construct',
  menuItems = [
    {
      title: 'Home',
      to: '/',
      hasDropdown: false,
    },
    {
      title: 'Services',
      to: '/#',
      hasDropdown: true,
      dropdownMenu: [
        {
          title: 'Construction',
          to: '/services/construction',
        },
        {
          title: 'Logistics',
          to: '/services/logistics',
        },
        {
          title: 'Oil & Gas',
          to: '/services/oilgas',
        },
        {
          title: 'Equipment',
          to: '/services/equipment',
        },
        {
          title: 'Life support and Services',
          to: '/services/lifesupport',
        },
      ],
    },
    {
      title: 'HSE',
      to: 'services/hse',
      hasDropdown: false,
    },
    {
      title: 'Careers',
      to: '/careers',
      hasDropdown: false,
    },
    {
      title: 'About',
      to: '/about',
      hasDropdown: false,
    },
    {
      title: 'Contact',
      to: '/contact',
      hasDropdown: false,
    },
  ]
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
        </Helmet>

        <Navbar menuItems={menuItems} />

        {children}
        <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
