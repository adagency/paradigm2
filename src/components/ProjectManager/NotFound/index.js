import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'components/Link'
import Banner from '../Template/Banner'

import styles from './styles.module.scss'

import bannerImg from 'images/banners/projects-not-found.jpg'

export default class NotFound extends Component {
  static propTypes = {
    data: PropTypes.array,
  }

  render() {
    const { data } = this.props
    return (
      <div className={styles.wrapper}>
        <Banner src={bannerImg} />
        <div className={styles.container}>
          <h2 className={styles.title}>404: <span>Project Not Found</span></h2>
          <div className={styles.content}>
            <h3>Directory:</h3>
            <ul className={styles.list}>
              {data.map((doc, key) => {
                return <li key={key}><Link className={styles.link} to={`/projects#${doc.uid}`}>{doc.data.title}</Link></li>
              })}
              <li className={styles.link}><Link className={styles.link} to='/projects#'>Back to Projects</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
