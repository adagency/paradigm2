import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Link from 'components/Link'

export default function Button({ children, target, to }) {
  if (target === '_blank') {
    return (
      <span className={styles.button}>
        <a href={to} target={target} className={styles.link}>
          {children}
        </a>
      </span>
    )
  }
  return (
    <span className={styles.button}>
      <Link to={to} className={styles.link}>
        {children}
      </Link>
    </span>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  target: PropTypes.string,
  to: PropTypes.string,
}
