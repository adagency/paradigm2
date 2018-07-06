import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './styles.module.scss'

export default function Button({ children, current, filter, onClick }) {
  const active = current === filter
  return (
    <button
      className={cn(styles.button, active && styles.buttonActive)}
      onClick={() => { onClick(filter) }}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  current: PropTypes.string,
  filter: PropTypes.string,
  onClick: PropTypes.func,
}
