import React from 'react'
import styles from './card.module.scss'
import { Link } from 'gatsby'

export default ({ title, img, body, to }) => (
  <article className={styles.card}>
    <div className={styles.cardHeader}>
      <div className={styles.cardHeaderTitle}>
        <h3>{title}</h3>
      </div>
      <div className={styles.cardImage}>
        <img src={img} alt={title} />
      </div>
    </div>
    <div className={styles.cardBody}>{body}</div>
    <div className={styles.cardFooter}>
      <Link to={to} className={styles.readMore}>
        Read more
      </Link>
    </div>
  </article>
)
