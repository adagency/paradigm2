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
          <h3 className={styles.title}>
            {
              content.data.title.split(' ').map((word, index) => (
                <span key={index}>{word + ' '}</span>
              ))
            }
          </h3>
          <p>{content.data.location}</p>
          <button className={styles.viewOurProjectsButton}>
            <span>View</span>
          </button>
        </div>
      </Link>      
    )
  }
}
