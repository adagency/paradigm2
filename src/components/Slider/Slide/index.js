import React, { cloneElement, Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default class Slide extends Component {
  static propTypes = {
    children: PropTypes.element,
    current: PropTypes.number,
    direction: PropTypes.string,
    firstAppear: PropTypes.bool,
    index: PropTypes.number,
    position: PropTypes.string,
    set: PropTypes.func,
    timeout: PropTypes.number,
  }

  static transitions = {
    prev: '0%',
    current: '0%',
    next: '-100%',
  }

  componentDidMount() {
    if (this.props.current === this.props.index) this.onEntering('next')
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.current !== this.props.current) {
      if (this.props.current === this.props.index) this.onEntering()
      else if (prevProps.current === this.props.index) this.onLeaving()
    }
  }

  onEntering = (direction) => {
    this.unPeek()
    const { timeout, firstAppear } = this.props
    direction = direction || this.getDirection()
    if (direction === 'next') {
      TweenMax.fromTo(this.node, timeout, { y: '-100%' }, { y: '0%' })
    } else {
      TweenMax.set(this.node, { y: '0%' })
    }
    if (this.childRef && this.childRef.onEntering) this.childRef.onEntering(direction, timeout, firstAppear)
    else if (this.childRef && this.childRef.wrappedInstance && this.childRef.wrappedInstance.onEntering) this.childRef.wrappedInstance.onEntering(direction, timeout, firstAppear)
  }

  onLeaving = () => {
    this.unPeek()
    const { timeout } = this.props
    const direction = this.getDirection()
    if (direction === 'next') {
      TweenMax.set(this.node, { y: '0%' })
    } else {
      TweenMax.fromTo(this.node, timeout, { y: '0%' }, { y: '-100%' })
    }
    if (this.childRef && this.childRef.onLeaving) this.childRef.onLeaving(direction, timeout)
    else if (this.childRef && this.childRef.wrappedInstance && this.childRef.wrappedInstance.onLeaving) this.childRef.wrappedInstance.onLeaving(direction, timeout)
  }

  getDirection() {
    return this.props.direction
  }

  get children() {
    return cloneElement(this.props.children, {
      ref: (c) => { this.childRef = c },
      set: this.props.set,
    })
  }

  peekPrev = (percent = 25) => {
    TweenLite.to(this.container, 0.25, { y: -percent + '%' })
  }

  peekNext = (percent = 75) => {
    const nextElementSibling = this.node.nextElementSibling
    TweenLite.to(nextElementSibling, 0.25, { y: -percent + '%' })
  }

  unPeek = () => {
    const nextElementSibling = this.node.nextElementSibling
    if (nextElementSibling) {
      TweenLite.to(nextElementSibling, 0.25, { y: '-100%' })
    }
    TweenLite.to(this.container, 0.25, { y: '0%' })
  }

  render() {
    const { current, index, position } = this.props
    const style = {
      pointerEvents: current === index ? 'auto' : 'none',
      transform: `translateY(${Slide.transitions[position]})`,
      zIndex: position === 'next' ? 1 : 0,
    }
    return (
      <div className={styles.wrapper} style={style} ref={c => { this.node = c }}>
        <div className={styles.container} ref={c => { this.container = c }}>
          {this.children}
        </div>
        {/* <div className={styles.peekPrev} onMouseEnter={this.peekNext} onMouseLeave={this.unPeek} />
        <div className={styles.peekNext} onMouseEnter={this.peekPrev} onMouseLeave={this.unPeek} /> */}
      </div>
    )
  }
}
