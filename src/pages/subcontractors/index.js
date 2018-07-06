import React from 'react'
import Helmet from 'components/Helmet'
import Banner from 'components/Banner'
import Content, { Col } from 'components/Content'
import Button from 'components/Button'
import styles from './styles.module.scss'

import AnimScroll from 'components/AnimationScroll'

import config from 'config'

export default function SubcontractorsPage({ data }) {
  return (
    <main>
      <Helmet
        title='Subcontractors | Paradigm Construction'
        description='Paradigm Construction employs only the most experienced and capable subcontractors available to us that share the same vision and standards in quality and performance.  Matching the perfect subcontractor to a particular project is the key to our success.  Our standards are set high, and our end results are consistently superb.'
      />
      <Banner sizes={data.bannerImage.sizes}>
        <h2>
          We are committed<br />
          to our subcontractor<br />
          partnerships.
        </h2>
      </Banner>
      <Content>
        <Col size='half'>
          <AnimScroll>
            <h3 className={styles.heading}>Connect via iSQFT</h3>
            <Button to='//app.isqft.com/login/index.html?returnurl=' target='_blank'>Open iSQFT</Button>
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
              Paradigm Construction employs only the most experienced and capable subcontractors available to us that share the same vision and standards in quality and performance.  Matching the perfect subcontractor to a particular project is the key to our success.  Our standards are set high, and our end results are consistently superb.
            </p>
          </AnimScroll>
        </Col>
      </Content>
    </main>
  )
}

export const query = graphql`
  query SubcontractorsPageQuery {
    bannerImage: imageSharp(id: { regex: "/banners/subcontractor-banner.jpg/" }) {
      sizes(
        quality: 80
        maxWidth: 2400
      ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  `
