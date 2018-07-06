import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import Controller from './Controller'
import mobileCheck from 'utils/mobileCheck'

export default class MouseTracker extends Component {
  static propTypes = {
    location: PropTypes.object,
  }

  static style = {
    bottom: 0,
    height: '100%',
    left: 0,
    pointerEvents: 'none',
    position: 'fixed',
    right: 0,
    top: 0,
    width: '100%',
    zIndex: '1000',
  }

  componentWillMount() {
    MouseTracker.isMobile = mobileCheck()
  }

  componentDidMount() {
    if (MouseTracker.isMobile) return
    this.controller = new Controller(this.canvas)
  }

  componentDidUpdate(prevProps) {
    if (MouseTracker.isMobile) return
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.controller.onResize()
    }
  }

  componentWillUnmount() {
    if (MouseTracker.isMobile) return
    this.controller.destroy()
  }

  render() {
    if (MouseTracker.isMobile) return false
    const style = MouseTracker.style
    if (typeof window === 'undefined') return false
    return createPortal(<canvas ref={c => { this.canvas = c }} style={style} />, document.body)
  }
}
