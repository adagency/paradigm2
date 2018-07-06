import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

export default function Banner({ src }) {
  const style = {
    backgroundImage: `url(${src})`,
  }
  return (
    <div className={styles.banner} style={style} />
  )
}

Banner.propTypes = {
  src: PropTypes.string,
}
