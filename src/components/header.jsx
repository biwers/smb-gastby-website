import React from 'react'
import Container from './layouts/container'
import styles from './header.module.scss'
import Button from './common/button'

const Header = ({ siteTitle }) => (
  <header className={styles.header} role="banner">
    <div className={styles.aboutCompany}>
      <h1 className={styles.displayOne}>
        PROVIDING GREATER VALUE WITH QUALITY SERVICES
      </h1>
      <p className={styles.aboutDescription}>
        SMB is a privately owned commercial service company based in Kurdistan,
        Iraq. We are specialists in the delivery of consultancy and bespoke,
        custom-built service solutions. Our key objectives as an organisation is
        customer and employee satisfaction.
      </p>
      <Button to="/about" type="a" title="More about us" />
    </div>
  </header>
)

export default Header
