import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import AnimationScroll from 'components/AnimationScroll'

import styles from './styles.module.scss'

export default function Image({ alt, size, src , trigger}) {

  const style = {
    backgroundImage: `url(${src})`,
  }
  return (
    <AnimationScroll types='gallery' duration={2} trigger={trigger}>
      <div className={cn(styles.container, styles[`size-${size}`])}>
        <div role='img' aria-label={alt} className={styles.image} style={style} />
      </div>
    </AnimationScroll>
  )
}

Image.propTypes = {
  alt: PropTypes.string,
  size: PropTypes.string,
  src: PropTypes.string,
  trigger: PropTypes.number
}
