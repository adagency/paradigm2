import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Hamburger from '../Hamburger'
import Headroom from 'react-headroom'
import Link from 'components/Link'

import styles from './styles.module.scss'
import './headroom.scss'

import logo from 'images/logos/paradigm-greyscale-logo.png'

export default class Bar extends PureComponent {
  static propTypes = {
    opened: PropTypes.bool,
    toggle: PropTypes.func,
  }

  settings = {
    disableInlineStyles: true,
  }

  render() {
    const { toggle, opened } = this.props
    return (
      <Headroom {...this.settings}>
        <div className={styles.container}>
          <div className={styles.left}>
            <Link to='/'>Home</Link>
            <Link to='/projects#'>Projects</Link>
            <Link to='/services'>Services</Link>
            <Link to='/' className={styles.logoLink}>
              <img src={logo} alt='logo' className='hover-effect' />
            </Link>
            <Link to='/leadership'>Leadership</Link>
            <Link to='/who-we-are'>Who We Are</Link>
            <Link to='/contact'>Contact</Link>
          </div>
          <div className={styles.right}>
            <Hamburger opened={opened} onClick={toggle} />
          </div>
        </div>
      </Headroom>
    )
  }
}
