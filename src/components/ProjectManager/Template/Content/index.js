import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import FileLink from 'components/FileLink'
import { Scene } from 'scrollmagic'

import logo from 'images/logos/paradigm-projects-logo.png'
import styles from './styles.module.scss'

export default class componentName extends Component {
  static propTypes = {
    architect: PropTypes.string,
    children: PropTypes.node,
    completion: PropTypes.string,
    location: PropTypes.string,
    owner: PropTypes.string,
    start: PropTypes.string,
    testimonial: PropTypes.object,
  }
  static contextTypes = {
    scrollmagic: PropTypes.any,
  }

  componentDidMount() {
    this.createAnimation()

    this.scene = new Scene({ triggerElement: this.node, triggerHook: 0.5 })
    this.scene.indicatorName = 'Test'
    this.scene.on('enter', () => this.animation.play())

    if (process.env.NODE_ENV === 'development') {
      this.scene.addIndicators({ name: this.scene.indicatorName })
    }

    this.scene.addTo(this.context.scrollmagic)
  }

  createAnimation() {
    if (this.animation) this.animation.kill()
    const infoChildren = Array.from(this.info.children).slice(0, this.info.children.length - 1)
    const image = this.info.children[this.info.children.length - 1]
    this.animation = new TimelineMax({ paused: true })
      .staggerFromTo(infoChildren, 1, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, 0.25)
      .fromTo(image, 1, { opacity: 0 }, { opacity: 1 }, 0)
      .staggerFromTo(this.content.children, 1, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, 0.25, 0.75)
  }

  render() {
    const { children, location, owner, start, completion, architect, testimonial } = this.props
    const startDate = moment(start)
    const completionDate = moment(completion)
    const currentDate = moment()
    const startText = startDate > currentDate ? 'Planned Start:' : 'Start:'
    const completionText = completionDate > currentDate ? 'Planned Completion:' : 'Completion:'
    return (
      <div className={styles.col} ref={c => { this.node = c }}>
        <div className={styles.info} ref={c => { this.info = c }}>
          {location && <p>Location: <span>{location}</span></p>}
          {owner && <p>Owner: <span>{owner}</span></p>}
          {start && <p>{startText} <span>{startDate.format('MM/DD/YYYY')}</span></p>}
          {completion && <p>{completionText} <span>{completionDate.format('MM/DD/YYYY')}</span></p>}
          {location && <p>Location: <span>{location}</span></p>}
          {architect && <p>Architect: <span>{architect}</span></p>}
          <img className={styles.image} src={logo} alt='' />
        </div>
        <div className={styles.content} ref={c => { this.content = c }}>
          {children}
          {testimonial &&
          <div style={{ textAlign: 'right' }}>
            <FileLink to={testimonial.primary.testimonial.url}>View Testimonial</FileLink>
          </div>
          }
        </div>
      </div>
    )
  }
}
