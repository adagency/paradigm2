import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import NotFound from './NotFound'
import Project from './Project'
import Grid from './Grid'

export default class ProjectManager extends PureComponent {
  static propTypes = {
    data: PropTypes.array,
    location: PropTypes.object,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.hash !== this.props.location.hash) {
      this.cachedHash = null
    }
  }

  componentDidUpdate(prevProps) {

  }

  duration = 500

  cachedHash = null

  get hash() {
    if (!this.props.location || this.props.data.length === 0) return ''
    if (this.cachedHash == null) {
      let hash = this.props.location.hash.replace(/#/g, '')
      if (!hash) this.cachedHash = ''
      else this.cachedHash = this.isRouteValid(hash) ? hash : '__404'
      return this.cachedHash
    }
    return this.cachedHash
  }

  isRouteValid(hash) {
    return this.props.data.some(project => project.uid === hash)
  }

  getProjectData(uid) {
    return this.props.data.find(doc => doc.uid === uid)
  }

  get children() {
    const { data } = this.props
    return data.map((doc, index) => {
      return (
        <Project
          current={this.hash}
          data={this.getProjectData(doc.uid)}
          duration={this.duration}
          hash={doc.uid}
          index={index}
          key={doc.uid}
          next={index + 1 >= data.length ? data[0] : data[index + 1]}
          prev={index === 0 ? data[data.length - 1] : data[index - 1]}
        />
      )
    })
  }

  render() {
    const { data } = this.props
    return (
      <div style={{ position: 'relative', perspective: this.duration }}>
        <Project hash='' current={this.hash} duration={this.duration}>
          <Grid data={data} />
        </Project>
        {this.children}
        <Project hash='__404' current={this.hash} duration={this.duration}>
          <NotFound data={data} />
        </Project>
      </div>
    )
  }
}
