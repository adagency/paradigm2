import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Scene } from 'scrollmagic'
import * as Directory from './Directory'

import styles from './styles.module.scss'

export default class BlueprintSVGs extends Component {
  static propTypes = {
    custom: PropTypes.string,
    duration: PropTypes.number,
    svg: PropTypes.string
  }

  static contextTypes = {
    scrollmagic: PropTypes.any,
  }

  componentDidMount() {
    let { custom, duration } = this.props
    if (window.innerWidth < 500) duration = 1
    this.animation = new TimelineMax({ paused: true })
      .from(this.svgDiv.children, duration || 5, { drawSVG: custom || '50% 50%' })
    console.log(custom)

    this.scene = new Scene({ triggerElement: this.node, triggerHook: 0.4 })
    this.scene.indicatorName = 'DrawSVG'
    this.scene.on('enter', () => this.animation.play())

    if (process.env.NODE_ENV === 'development') {
      this.scene.addIndicators({ name: this.scene.indicatorName })
    }

    this.scene.addTo(this.context.scrollmagic)
  }

  get svg() {
    const SVG = Directory[this.props.svg]
    if (!SVG) throw Error('No SVG named ' + this.props.svg)
    return SVG
  }

  render() {
    const SVG = this.svg
    return (
      <div className={styles.wrapper} ref={c => { this.node = c }} style={{ bottom: 'auto' }} >
        <div className={styles.container}>
          <SVG className={styles.svg} refAnim={c => { this.svgDiv = c }} />
        </div>
      </div>
    )
  }
}
