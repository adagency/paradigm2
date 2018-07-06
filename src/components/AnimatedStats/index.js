import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Scene } from 'scrollmagic'
import { round } from 'lodash'

import AnimScroll from 'components/AnimationScroll'

import styles from './styles.module.scss'

export default class AnimatedStats extends Component {
  static contextTypes = {
    scrollmagic: PropTypes.any,
  }

  state = {
    employees: 0,
    experience: 0,
    value: 0,
    percent: 0,
  }

  tweenObject = {
    employees: 0,
    experience: 0,
    value: 0,
    percent: 0,
  }

  finalState = {
    employees: 30,
    experience: 65,
    value: 2.2,
    percent: 95,

  }

  componentDidMount() {
    const { employeeNum, employeeDiv, expNum, expDiv, valueNum, valueDiv, percentNum, percentDiv, tweenObject } = this
    const { employees, experience, value, percent } = this.finalState
    this.animation = new TimelineMax({ paused: true, onUpdate: this.onUpdate })
      .fromTo(tweenObject, 2, { employees: 0 }, { employees, roundProps: 'employees', ease: Power0.easeNone })
      .fromTo(employeeDiv, 0.5, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, 0)
      .fromTo(employeeNum, 2, { scale: 0 }, { scale: 1 }, 0)
      .fromTo(tweenObject, 2, { experience: 0 }, { experience, roundProps: 'experience', ease: Power0.easeNone }, 1)
      .fromTo(expDiv, 0.5, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, 1)
      .fromTo(expNum, 2, { scale: 0 }, { scale: 1 }, 1)
      .fromTo(tweenObject, 2, { value: 0 }, { value, ease: Power0.easeNone }, 1.5)
      .fromTo(valueDiv, 0.5, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, 1.5)
      .fromTo(valueNum, 2, { scale: 0 }, { scale: 1 }, 1.5)
      .fromTo(tweenObject, 2, { percent: 0 }, { percent, roundProps: 'percent', ease: Power0.easeNone }, 2)
      .fromTo(percentDiv, 0.5, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, 2)
      .fromTo(percentNum, 2, { scale: 0 }, { scale: 1 }, 2)

    this.scene = new Scene({ triggerElement: this.node, triggerHook: 0.4 })
    this.scene.indicatorName = 'AnimatedStates'
    this.scene.on('enter', () => this.animation.play())

    if (process.env.NODE_ENV === 'development') {
      this.scene.addIndicators({ name: this.scene.indicatorName })
    }

    this.scene.addTo(this.context.scrollmagic)
  }

  onUpdate = () => {
    this.setState({ ...this.state, ...this.tweenObject })
  }

  render() {
    const { employees, experience, value, percent } = this.state
    return (
      <AnimScroll>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.flex} ref={c => { this.node = c }}>
              <div className={styles.quadrant} ref={c => { this.employeeDiv = c }}>
                <div className={styles.content}>
                  <span className={styles.number} ref={c => { this.employeeNum = c }}>{employees}</span><span className={styles.sign}>+</span><br />
                  <span className={styles.text}>Total # of employees</span>
                </div>
              </div>
              <div className={styles.quadrant} ref={c => { this.expDiv = c }}>
                <div className={styles.content}>
                  <span className={styles.number} ref={c => { this.expNum = c }}>{experience}</span><span className={styles.sign}>+</span><br />
                  <span className={styles.text}>Years of combined experience</span>
                </div>
              </div>
              <div className={styles.quadrant} ref={c => { this.valueDiv = c }}>
                <div className={styles.content}>
                  <span className={styles.number} ref={c => { this.valueNum = c }}><span className={styles.subText}><sup>$</sup></span>{round(value, 1)}<span className={styles.subText}>B</span></span><span className={styles.sign}>+</span><br />
                  <span className={styles.text}>Value of total properties built each year</span>
                </div>
              </div>
              <div className={styles.quadrant} ref={c => { this.percentDiv = c }}>
                <div className={styles.content}>
                  <span className={styles.number} ref={c => { this.percentNum = c }}>{percent}</span><span className={styles.sign}>%</span><br />
                  <span className={styles.text}>of Projects completed on time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimScroll>
    )
  }
}
