import React from 'react'
import styles from './button.module.scss'
import { Link } from 'gatsby'
const Button = ({ type, size, title, to }) => {
  if (type === 'a') {
    return (
      <Link to={to} title={title} className={styles.btnAbout}>
        {title}
      </Link>
    )
  }

  return (
    <button className={styles.btnAbout} type={type}>
      {title}
    </button>
  )
}

export default Button
