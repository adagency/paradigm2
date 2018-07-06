import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default function CloseBtn({ children, toggle }) {
  return (
    <div onClick={toggle} className={styles.closeBtn}>
      <svg className={styles.svg} viewBox='0 0 24 24'>
        <path d='M23 20.168l-8.185-8.187L23 3.807 20.168 1l-8.182 8.179L3.81 1 1 3.81l8.186 8.196L1 20.19 3.81 23l8.203-8.192L20.193 23z' />
      </svg>
      <span className={styles.closeText}>Close</span>
    </div>
  )
}

CloseBtn.propTypes = {
  children: PropTypes.any,
  toggle: PropTypes.func,
}
