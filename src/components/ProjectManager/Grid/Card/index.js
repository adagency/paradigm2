import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Link from 'components/Link'

export default class Card extends Component {
  static propTypes = {
    content: PropTypes.object,
  }

  render() {
    const { content } = this.props
    const style = {
      backgroundImage: `url(${content.data.banner.url})`,
    }
    return (
      <Link className={styles.wrapper} to={`/projects#${content.uid}`}>
        <div className={styles.background} style={style} />
        <div className={styles.content}>
          <h3>{content.data.title.split(' ').map((word, index) => (
            <span key={index} style={{ animationDelay: `${0.05 * index}s` }}>{word + ' '}</span>
          ))}
          </h3>
          <p>{content.data.location}</p>
          <p className={styles.p}>View</p>
        </div>
      </Link>
    )
  }
}
