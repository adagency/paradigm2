import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Link from 'components/Link'
import styles from './styles.module.scss'
import CloseBtn from './CloseBtn'

import imgLogo from 'images/logos/paradign-nav-logo.png'

export default class Menu extends PureComponent {
  static propTypes = {
    children: PropTypes.array,
    close: PropTypes.func,
    location: PropTypes.object,
    opened: PropTypes.bool,
    toggle: PropTypes.func,
  }

  links = []

  componentDidMount() {
    this.createAnimation()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.close(true)
    }
    if (prevProps.opened !== this.props.opened) {
      this.props.opened ? this.open() : this.close()
    }
  }

  createAnimation() {
    if (this.animaton) this.animaton.kill()
    this.links = this.list.children
    this.animaton = new TimelineMax({ paused: true })
      .fromTo(this.menu, 0.25, { x: '-100%' }, { x: '0%' })
      .staggerFromTo(this.links, 0.25, { opacity: 0 }, { opacity: 1, ease: Power2.easeIn }, 0.15)
  }

  open() {
    this.animaton.timeScale(1).play()
  }

  close() {
    this.animaton.timeScale(3).reverse()
  }

  refName(name) {
    return (c) => { this[name] = c }
  }

  render() {
    const { children, close, toggle, location } = this.props
    return (
      <div className={styles.container} ref={this.refName('menu')}>
        <div className={styles.overlay} onClick={close} />
        <div className={styles.content}>
          <div className={styles.bar}>
            <CloseBtn toggle={toggle} />
            <img src={imgLogo} alt='nav logo' className={styles.logo} />
          </div>
          <div className={styles.menu}>
            <div className={styles.list} ref={this.refName('list')}>
              {children.map((item, index) => {
                return (
                  <Link onClick={() => {
                    if (item.to.includes(location.pathname)) this.props.close()
                  }} key={index} className={styles.link} to={item.to}
                  >
                    {item.text}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
