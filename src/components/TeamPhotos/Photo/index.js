import React from 'react'
import PropTypes from 'prop-types'

import AnimScroll from 'components/AnimationScroll'

import styles from './styles.module.scss'

export default function Photo({ name, title, src, onClick, index }) {
  return (
    <AnimScroll>
      <div className={styles.container} onClick={() => { onClick(index) }}>
        <img alt={name} src={src} className={styles.img} />
        <h3 className={styles.name}>{name}</h3>
        <p>{title}</p>
      </div>
    </AnimScroll>
  )
}

Photo.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string,
  index: PropTypes.number,
  onClick: PropTypes.func,
}
