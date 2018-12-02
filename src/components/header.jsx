import React from 'react'
import { Link } from 'gatsby'
import Container from './layouts/container'

const Header = ({ siteTitle }) => (
  <Container>
    <Link to="/">{siteTitle}</Link>
  </Container>
)

export default Header
