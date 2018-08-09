import React from 'react'
import Helmet from 'components/Helmet'
import Banner from 'components/Banner'
import Content, { Col } from 'components/Content'
import styles from './styles.module.scss'

import AnimScroll from 'components/AnimationScroll'

import config from 'config'

export default function CareersPage({ data }) {
  return (
    <main>
      <Helmet
        title='Careers | Paradigm Construction'
        description='The success of Paradigm Construction begins with talented, committed people.  But working with us means far more than that. We have an enriching company culture and invest in our employees to create unique perspectives and produce superb work.'
      />
      <Banner sizes={data.bannerImage.sizes}>
        <h2>
          Seeking motivated,<br />
          Detail Oriented, &<br />
          Driven Individuals.
        </h2>
      </Banner>
      <Content>
        <Col size='half'>
          <AnimScroll>
            <h3 className={styles.heading}>Careers</h3>
            <p>
              <a className={styles.link} href={config.careersMailto}>info@pcc-tx.com</a>
            </p>
          </AnimScroll>
        </Col>
        <Col size='half'>
          <AnimScroll>
            <h3 className={styles.heading}>Corporate Headquarters</h3>
            <p>
              26865 Interstate 45<br />
              Suite 300<br />
              The Woodlands, Texas 77380<br />
              p: <a className={styles.link} href={config.tel}>281.890.0584</a> | <a className={styles.link} href={config.address.directions} target='_blank'>MAP</a>
            </p>
          </AnimScroll>
        </Col>
      </Content>
      <Content>
        <Col size='two-third'>
          <AnimScroll>
            <p>
              The success of Paradigm Construction begins with talented, committed people.  But working with us means far more than that. We have an enriching company culture and invest in our employees to create unique perspectives and produce superb work.
            </p>
          </AnimScroll>
        </Col>
        <Col size='two-third'>
          <AnimScroll>
            <p>
              We are about being diverse, with the ability to collaborate and build relationships with clients.  If you possess the integrity and trust needed within this industry, then Paradigm might be the place for you.
            </p>
          </AnimScroll>
        </Col>
      </Content>
    </main>
  )
}

export const query = graphql`
  query CareersPageQuery {
    bannerImage: imageSharp(id: { regex: "/banners/careers-banner.jpg/" }) {
      sizes(
        quality: 80
        maxWidth: 2400
      ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  `
