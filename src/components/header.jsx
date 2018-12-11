import React from 'react'
import styles from './header.module.scss'
import Button from './common/button'
import Headerhero from './common/headerHero'

export default ({ title, img }) => (
  <Headerhero
    isHome={true}
    img={img}
    title="PROVIDING GREATER VALUE WITH QUALITY SERVICES"
  >
    <p className={styles.aboutDescription}>
      SMB is a privately owned commercial service company based in Kurdistan,
      Iraq. We are specialists in the delivery of consultancy and bespoke,
      custom-built service solutions. Our key objectives as an organisation is
      customer and employee satisfaction.
    </p>

    <Button to="/about" type="a" title="More about us" />
  </Headerhero>
)
