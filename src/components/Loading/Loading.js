import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default function Loading({ children }) {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Loading...</span>
      <div className={styles.loader}>
        <div className={styles.spinnerBlock}>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  )
}

Loading.propTypes = {
  children: PropTypes.any,
}
