import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Link from 'components/Link'
import SVGBackground from './SVGBackground'

import styles from './styles.module.scss'
import wall from './brick-wall.jpg'
import couch from './couch.png'
import dog from './dog.png'

export default class WhoWeAreSlide extends Component {
  static propTypes = {
    // alt: PropTypes.string,
    children: PropTypes.node,
  }

  componentDidMount() {
    const paths = this.svg.children
    const images = this.imageWrapper.children
    this.animation = new TimelineMax({ paused: true })
      .staggerFromTo(this.container.children, 1, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, 0.25)
      .from(paths, 5, { drawSVG: '50% 50%', ease: Power0.easeNone }, 1)
      .from(images[0], 1, { opacity: 0, y: '-50%' }, 0.5)
      .from(images[1], 1, { opacity: 0 }, 1.5)
      .from(images[2], 1, { opacity: 0, y: -10 }, 2.25)
  }

  onEntering = (direction, timeout, firstAppear) => {
    this.animation.timeScale(1).delay(timeout).restart(true)
  }

  onLeaving = (direction, timeout) => {
    this.animation.pause(0)
  }

  render() {
    const { children } = this.props
    return (
      <div className={styles.wrapper}>
        <div className={styles.background}>
          <SVGBackground refAnim={c => { this.svg = c }} />
        </div>
        <div className={styles.container}>
          <div className={styles.content} ref={c => { this.container = c }}>
            {children}
            <div style={{ textAlign: 'right' }}>
              <Link className={styles.link} to='/who-we-are'>- See Who We Are</Link>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imageWrapper} ref={c => { this.imageWrapper = c }}>
              <img src={wall} />
              <img src={couch} />
              <img src={dog} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
