import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Link from 'gatsby-link'

export default function BoxButton({ children, to }) {
  return (
    <button className={styles.button}>
      <Link to={to} className={styles.link}>{children}</Link>
    </button>
  )
}

BoxButton.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
}
