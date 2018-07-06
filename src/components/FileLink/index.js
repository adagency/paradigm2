import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

export default function FileLink({ children, to }) {
  return (
    <a href={to} target='_blank' className={styles.link}>
      <svg viewBox='0 0 24 24' className={styles.svg}>
        <path d='M11.362 2C15.518 2 14 8 14 8s6-1.65 6 2.457V22H4V2h7.362zm.827-2H2v24h20V9.614C22 7.223 15.352 0 12.189 0zM17 13H7v-1h10v1zm0 2H7v1h10v-1zm0 3H7v1h10v-1z' />
      </svg>
      <span>{children}</span>
    </a>
  )
}

FileLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
}
