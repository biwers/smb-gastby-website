import React from 'react'
import styles from './highlight.module.scss'

export default ({ children, ...props }) => (
  <div className={styles.highlightRow} {...props}>
    {children}
  </div>
)
