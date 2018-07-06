import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styles from './styles.module.scss'
import ScrollDown from './ScrollDown'
import cn from 'classnames'
import GyroHandler from './GyroHandler'
import mobileCheck from 'utils/mobileCheck'
import { TimelineMax } from 'gsap'

export default class Banner extends Component {
  static propTypes = {
    children: PropTypes.any,
    sizes: PropTypes.object,
    half: PropTypes.bool,
  }

  componentDidMount() {
    if (mobileCheck()) {
      this.gyrohandler = new GyroHandler(this.onGyroUpdate, this.onGyroInit, this.node)
    }
    this.createAnimation()
  }

  state = {
    animationCSS: true,
  }

  lastPos = {
    intial: null,
    dx: null,
  }

  createAnimation() {
    this.animation = new TimelineMax({ delay: 0.25 })
      .from(this.content, 2, { opacity: 0, y: 50 })
  }

  onGyroInit = () => {
    this.node.style.removeProperty('animation')
    this.animation = TweenMax.fromTo(this.node, 30, { x: 100 }, { x: -100 })
    this.animation.pause(this.animation.duration() / 2)
    this.setState({ animationCSS: false })
  }

  onGyroUpdate = (dx) => {
    if (this.lastPos.intial === null) {
      this.lastPos = { dx, intial: dx }
    }
    const difference = this.lastPos.intial - dx
    if (difference > 10 && this.animation.reversed()) this.animation.play()
    else if (difference <= -10 && !this.animation.reverse()) this.animation.reversed()
    // else if (difference > -10 && difference <= 10) this.animation.pause()
    this.lastPos.dx = dx
  }

  render() {
    const { animationCSS } = this.state
    const { children, sizes, half } = this.props
    return (
      <div className={half ? styles.half : styles.full}>
        <div className={styles.overlay} />
        <div className={cn(styles.imageWrapper, animationCSS && styles.animation)} ref={c => { this.node = c }}>
          <Img
            className={styles.image}
            sizes={sizes}
            style={{ position: `absolute`, zIndex: '-1' }}
          />
        </div>
        <div className={styles.container} ref={c => { this.content = c }}>
          <div className={styles.content}>
            {children}
          </div>
        </div>
        <ScrollDown />
      </div>
    )
  }
}
