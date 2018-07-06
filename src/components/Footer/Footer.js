import React from 'react'
import PropTypes from 'prop-types'
import ContactCTA from 'components/ContactCTA'

export default function Footer({ location }) {
  if (location.pathname === '/') return false
  else if (location.pathname.includes('/projects')) return false
  return <ContactCTA />
}

Footer.propTypes = {
  location: PropTypes.object,
}
