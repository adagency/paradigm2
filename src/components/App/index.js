import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { BaseHelmet } from 'components/Helmet'
import ScrollMagicContext from 'components/ScrollMagicContext'
import Prismic from 'components/Prismic'
import Loader from 'components/Loader'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object,
  }

  render() {
    const { children, location } = this.props
    return (
      <Fragment>
        <Loader />
        <Prismic location={location} />
        <BaseHelmet location={location} />
        <ScrollMagicContext location={location}>
          {children}
        </ScrollMagicContext>
      </Fragment>
    )
  }
}
