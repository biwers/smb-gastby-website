import React from 'react'
import styles from '../header.module.scss'
import Button from './button'

export default ({ children, title, img, isHome, isNotService }) => (
  <header
    className={isHome ? styles.header : styles.serviceHeader}
    role="banner"
  >
    <div className={styles.aboutCompany}>
      {!isHome && !isNotService && <p>Services</p>}
      <h1 className={styles.displayOne}>{title}</h1>
      {children}
    </div>
    <div
      className={styles.bgOverlay}
      style={{
        background: `url(${img}) no-repeat bottom center`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    />
  </header>
)
