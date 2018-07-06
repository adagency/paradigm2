import React from 'react'
import Link from 'components/Link'
import Banner from 'components/ProjectManager/Template/Banner'

import styles from './styles.module.scss'

import bannerImg from 'images/banners/projects-not-found.jpg'

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <Banner src={bannerImg} />
      <div className={styles.container}>
        <h2 className={styles.title}>404: <span>Page Not Found</span></h2>
        <Link className={styles.link} to='/'>Back to Home</Link>
      </div>
    </div>
  )
}
