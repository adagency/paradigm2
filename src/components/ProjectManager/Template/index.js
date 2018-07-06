import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { RichText } from 'prismic-reactjs'

import Banner from './Banner'
import Content from './Content'
import PrevNext from './PrevNext'
import Gallery from './Gallery'
import ContactCTA from 'components/ContactCTA'
import Video from './Video'
import styles from './styles.module.scss'

export default class Template extends Component {
  static propTypes = {
    content: PropTypes.object,
    prev: PropTypes.object,
    next: PropTypes.object,
  }

  render() {
    const { content, next, prev } = this.props
    return (
      <div className={styles.wrapper}>
        <Banner src={content.data.banner.url} />
        <div className={styles.container}>
          <h2 className={styles.title}>
            Project: <span>{content.data.title}</span>
          </h2>
          <div className={styles.row}>
            <Content
              testimonial={content.data.body[0]}
              location={content.data.location}
              owner={content.data.owner}
              start={content.data.start}
              completion={content.data.completion}
              architect={content.data.architect}
              preview={content.data.preview}
            >
              {RichText.render(content.data.content)}
            </Content>
            {content.data.preview.url && !content.data.timelapse.url && <img src={content.data.preview.url} className={styles.preview} alt={content.data.preview.alt} />}
            {content.data.timelapse.url && <Video url={content.data.timelapse.url} />}
          </div>
          {!!content.data.gallery.length && <Gallery data={content.data.gallery} />}
          <PrevNext prev={prev} next={next} />
          <ContactCTA hash={content.uid} />
        </div>
      </div>
    )
  }
}
