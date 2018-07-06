import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { range } from 'lodash'

import styles from './styles.module.scss'

export default class Tracker extends Component {
  static propTypes = {
    current: PropTypes.number,
    length: PropTypes.number,
    onClick: PropTypes.func,
  }

  padZeros(n) {
    n = n + ''
    const width = 2
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n
  }

  elementInfo(element) {
    return {
      top: element.offsetTop,
      height: element.offsetHeight,
      width: element.offsetWidth,
    }
  }

  updateTracker = () => {
    if (this.animation) this.animation.kill()
    const dot = this.elementInfo(this.dot)
    const activeDot = this.elementInfo(this.list.children[this.props.current])
    const y = activeDot.top + activeDot.height / 2 - dot.height / 2
    const timing = 0.25
    this.animation = new TimelineMax({ ease: Power0.easeNone })
      .fromTo(this.dot, timing / 2, { scale: 2 }, { scale: 1 })
      .to(this.dot, timing, { y }, 0)
      .fromTo(this.dot, timing / 2, { scale: 1 }, { scale: 2 }, timing / 2)
      .set(this.dot, { opacity: 1 })
  }

  resize = () => {
    this.updateTracker()
  }

  componentDidMount() {
    this.timer = setTimeout(this.updateTracker, 250)
    window.addEventListener('resize', this.resize)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.current !== this.props.current) {
      this.updateTracker()
    }
  }

  componentWillUnmount() {
    if (this.timer) clearTimeout(this.timer)
    window.removeEventListener('resize', this.resize)
  }

  render() {
    const { current, length, onClick } = this.props
    return (
      <div className={styles.wrapper}>
        <span className={styles.trackingDot} ref={c => { this.dot = c }} />
        <ul className={styles.list} ref={c => { this.list = c }}>
          {range(length).map((index) => {
            const active = index === current
            return (
              <li key={index}>
                <button className={cn(styles.button, active && styles.active)} onClick={() => { onClick(index) }}>
                  <span>{this.padZeros(index + 1)}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
