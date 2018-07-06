import React from 'react'
import styles from './styles.module.scss'
import Link from 'components/Link'
import moment from 'moment'

import config from 'config'

export default function Bottom(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <a href={config.facebook} target='_blank' rel='noopener noreferrer' className={styles.link}>
            <svg viewBox='0 0 24 24' className={styles.svg}>
              <path d='M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z' />
            </svg>
          </a>
          <a href={config.linkedin} target='_blank' rel='noopener noreferrer' className={styles.link}>
            <svg viewBox='0 0 24 24' className={styles.svg}>
              <path d='M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z' />
            </svg>
          </a>
        </div>
        <p>
          &copy; {moment().format('YYYY')} Paradigm Construction. Texas. All Rights Reserved | <a href='/sitemap.xml' target='_blank'>Sitemap</a> | <Link to='privacy-policy'>Privacy Policy</Link>
        </p>
      </div>
    </div>
  )
}
