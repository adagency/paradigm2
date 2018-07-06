import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Link from 'components/Link'
import SVGBackground from './SVGBackground'

import styles from './styles.module.scss'

import part1 from './1.png'
import part2 from './2.png'
import part3 from './3.png'
import part4 from './4.png'
import part5 from './5.png'
import part6 from './6.png'
import part7 from './7.png'
import part8 from './8.png'
import SVGHouse from './SVGHouse'

export default class ProjectsSlide extends Component {
  static propTypes = {
    // alt: PropTypes.string,
    children: PropTypes.node,
  }

  componentDidMount() {
    const paths = this.svg.children
    const houseDrawing = this.imageWrapper.children[0].children
    const parts = Array.from(this.imageWrapper.children).slice(1, this.imageWrapper.children.length)
    this.animation = new TimelineMax({ paused: true })
      .staggerFromTo(this.container.children, 1, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, 0.25)
      .from(paths, 10, { drawSVG: '1500 50%', ease: Power0.easeNone }, 1)
      .from(houseDrawing, 2, { drawSVG: '50% 50%', ease: Power0.easeNone }, 0.5)
      .staggerFrom(parts, 0.5, { opacity: 0, y: -15 }, 0.15, 2)
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
              <Link className={styles.link} to='/projects#'>- View Our Projects</Link>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imageWrapper} ref={c => { this.imageWrapper = c }}>
              <SVGHouse />
              <img src={part5} />
              <img src={part1} />
              <img src={part4} />
              <img src={part7} />
              <img src={part6} />
              <img src={part8} />
              <img src={part2} />
              <img src={part3} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
