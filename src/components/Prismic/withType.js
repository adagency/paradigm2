import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStatToProps = ({ prismic }) => ({ data: prismic.data })

export default function withType(WrappedComponent, dataType) {
  class withTypeWrapper extends Component {
    get data() {
      if (!this.props.data) return []
      return this.props.data.filter(doc => doc.type === dataType)
    }

    render() {
      const { data, ...rest } = this.props
      return <WrappedComponent data={this.data} {...rest} />
    }
  }

  return connect(mapStatToProps, null)(withTypeWrapper)
}
