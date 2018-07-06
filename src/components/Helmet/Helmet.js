import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactHelmet from 'react-helmet'

import config from 'config'

export default class Helmet extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  }

  get title() {
    return this.props.title + ' | ' + config.meta_title
  }

  get description() {
    return this.props.description
  }

  render() {
    const { title, description } = this
    return (
      <ReactHelmet
        title={title}
        meta={[
          { name: 'description', 'content': description },
          { property: 'og:title', content: title },
          { property: 'og:description', content: description },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
        ]}
      />
    )
  }
}
