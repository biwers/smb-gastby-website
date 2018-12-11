import React from 'react'
import styles from './headline.module.scss'

const Headline = ({ children, styledText }) => (
  <h2 className={styles.sectionHeadline}>
    {styledText && <span className={styles.styledText}>{styledText}</span>}
    {children}
  </h2>
)

export default Headline
