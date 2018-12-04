import React from 'react'
import styles from './button.module.scss'
import { Link } from 'gatsby'
const Button = ({ type, size, title, to }) => {
  if (type === 'button')
    return <button className={styles.btnAbout}>{title}</button>
  return (
    <Link to={to} title={title} className={styles.btnAbout}>
      {title}
    </Link>
  )
}

export default Button
