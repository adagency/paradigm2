import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Template from '../Template'

import { Transition } from 'react-transition-group'

export default class Project extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    current: PropTypes.string,
    duration: PropTypes.number,
    hash: PropTypes.string,
    index: PropTypes.number,
    next: PropTypes.object,
    prev: PropTypes.object,
  }

  exitingStyle() {
    if (!this.node) return {}
    return {
      position: 'absolute',
      height: this.node.offsetHeight,
      width: this.node.offsetWidth,
      top: 0,
      left: 0,
    }
  }

  defaultStyle = {
    height: 'auto',
    opacity: 0,
    transition: `opacity ${this.props.duration}ms ease-in-out, transform ${this.props.duration}ms ease-in-out`,
    transform: 'translateZ(0)',
    width: '100%',
  }

  transitionStyles = {
    entering: { opacity: 0, transform: 'translateZ(-500px)' },
    entered: { opacity: 1, transform: 'translateZ(0)' },
    exiting: { opacity: 0, transform: 'translateZ(-500px)' },
    exited: { opacity: 0, transform: 'translateZ(-500px)' },
  }

  style(state) {
    let computedStyle = { ...this.defaultStyle, ...this.transitionStyles[state] }
    if (state === 'exiting') computedStyle = { ...computedStyle, ...this.exitingStyle() }
    return computedStyle
  }

  onEntering = () => {
    window.scrollTo(0, 0)
  }

  render() {
    const { children, current, data, duration, hash, index, next, prev } = this.props
    return (
      <Transition
        in={current === hash}
        timeout={duration}
        onEntering={this.onEntering}
        unmountOnExit
      >
        {(state) => (
          <div style={this.style(state)} ref={c => { this.node = c }}>
            {children || <Template content={data} index={index} prev={prev} next={next} />}
          </div>
        )}
      </Transition>
    )
  }
}
