import PropTypes from 'prop-types'
import React from 'react'

import App from 'components/App'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

import 'base.scss'

const TemplateWrapper = ({ children, location }) => {
  return (
    <App location={location}>
      <Nav location={location} />
      {children()}
      <Footer location={location} />
    </App>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
}

export default TemplateWrapper
