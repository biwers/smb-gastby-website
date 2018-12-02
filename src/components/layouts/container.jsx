import React from 'react'
import styles from './container.module.scss'

export const Row = ({ children, verticalMargin }) => {
  if (!verticalMargin) {
    return <div className={styles.row}>{children}</div>
  }
  return (
    <div
      style={{ marginTop: verticalMargin, marginBottom: verticalMargin }}
      className={styles.row}
    >
      {children}
    </div>
  )
}

const Container = props => (
  <div className={styles.container} {...props}>
    {props.children}
  </div>
)

export default Container
