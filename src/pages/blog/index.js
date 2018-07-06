import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'components/Helmet'
import Banner from 'components/Banner'
import Loading from 'components/Loading'
import styles from './styles.module.scss'
import Content, { Col } from 'components/Content'

import { connect } from 'react-redux'
import * as Actions from 'reducers/medium'

class Blog extends Component {
  static propTypes = {
    fetch: PropTypes.func,
    medium: PropTypes.object,
  }
  componentDidMount() {
    if (!this.props.medium.data && !this.props.medium.fetching) {
      this.props.fetch()
    }
  }

  render() {
    const { data, medium } = this.props
    const blogs = !medium.data ? [] : medium.data.items
    return (
      <main>
        <Helmet
          title='Blog | Paradigm Construction'
          description='Welcome to The Oaks Dog Ranch! We’re a doggie dude ranch that provides your dog an active, sensory-filled adventure while you’re at work or enjoying a much needed getaway.'
        />
        <Banner half sizes={data.bannerImage.sizes}>
          <h2>
            Stories & Updates<br />
            by Paradigm Construction
          </h2>
        </Banner>
        {medium.fetching && <div style={{ height: '30px', width: '100%' }} />}
        {medium.fetching && <Loading />}
        <Content>
          <Col>
            {!!blogs.length && blogs.map((blog, index) => {
              return ([
                <div key={index}>
                  <div className={styles.blog}>
                    <h2 className={styles.title}>
                      <a target='_blank' rel='noopener noreferrer' href={blog.link}>{blog.title}</a>
                    </h2>
                    <span className={styles.date}>{blog.pubdate}</span>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: blog['content:encoded'] }} />
                  </div>
                </div>,
                <hr key={index + 1} />,
              ]
              )
            })}
          </Col>
        </Content>
      </main>
    )
  }
}

export const query = graphql`
  query BlogPageQuery {
    bannerImage: imageSharp(id: { regex: "/banners/blog-banner.jpg/" }) {
      sizes(
        quality: 80
        maxWidth: 2400
      ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  `

function mapStateToProps({ medium }) {
  return {
    medium,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => dispatch(Actions.fetch()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
