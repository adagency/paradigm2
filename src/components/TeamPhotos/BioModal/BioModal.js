import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { createPortal } from 'react-dom'

import CloseBtn from '../CloseBtn'

export default class BioModal extends Component {
  static propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
  }

  state = {
    visible: false,
    exit: false,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.removeProperty('overflow')
      if (!document.body.getAttribute('style')) document.body.removeAttribute('style')
    }

    if (nextProps.data !== this.props.data && nextProps.data) {
      this.enter()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.visible !== prevState.visible && this.state.visible) {
      this.enterAnim()
    } else if (prevState.exit !== this.state.exit && this.state.exit) {
      this.exitAnim()
    }
  }

  enter() {
    this.setState({ visible: true })
  }

  enterAnim() {
    if (this.animation) this.animation.kill()
    this.animation = new TimelineMax()
      .from(this.wrapper, 0.25, { opacity: 0 })
      .from(this.container, 0.25, { opacity: 0, y: 50 })
      .staggerFrom(this.content.children, 0.5, { opacity: 0, y: 50 }, 0.25)
  }

  exitAnim() {
    TweenMax.to(this.wrapper, 0.25, { opacity: 0, onComplete: this.done })
  }

  done = () => {
    this.props.onClick(-1)
    this.setState({ visible: false, exit: false })
  }

  onClick = () => {
    this.setState({ exit: true })
  }

  render() {
    const { data } = this.props
    const { visible } = this.state
    if (typeof window === 'undefined' || !visible || !data) return false
    return (
      createPortal(
        <div className={styles.wrapper} ref={c => { this.wrapper = c }}>
          <div className={styles.overlay} onClick={this.onClick} />
          <div className={styles.container} ref={c => { this.container = c }}>
            <CloseBtn onClick={this.onClick} />
            <div style={{ overflow: 'hidden' }} ref={c => { this.content = c }}>
              <img src={data.src} alt={data.name} className={styles.img} />
              <h3 className={styles.name}>{data.name}</h3>
              <h4 className={styles.title}>{data.title}</h4>
              <div className={styles.content}>{data.bio}</div>
            </div>
          </div>
        </div>,
        document.body
      )
    )
  }
}
