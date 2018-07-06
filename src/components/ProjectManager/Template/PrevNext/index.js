import React from 'react'
import PropTypes from 'prop-types'
import Link from 'components/Link'

import styles from './styles.module.scss'

export default function PreNext({ prev, next }) {
  const linkResolver = uid => `/projects#${uid}`
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link
          className={styles.button}
          to={linkResolver(prev.uid)}
          style={{ backgroundImage: `url(${prev.data.banner.url}` }}
        >
          Previous Project
        </Link>
        <Link
          className={styles.button}
          to={linkResolver(next.uid)}
          style={{ backgroundImage: `url(${next.data.banner.url}` }}
        >
          Next Project
        </Link>
      </div>
      <div>
        <Link className={styles.link} to='/projects#'>Back To Projects</Link>
      </div>
    </div>
  )
}

PreNext.propTypes = {
  prev: PropTypes.object,
  next: PropTypes.object,
}
