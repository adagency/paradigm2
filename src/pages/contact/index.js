import React from 'react'
import Helmet from 'components/Helmet'
import Banner from 'components/Banner'
import Content, { Col } from 'components/Content'
import Industries from 'components/Industries'
import styles from './styles.module.scss'

import AnimScroll from 'components/AnimationScroll'

import config from 'config'

export default function ContactPage({ data }) {
  return (
    <main>
      <Helmet
        title='Contact | Paradigm Construction'
        description='We are not just contractors, we are your collaborative partners. Our pre-construction phase involves design with our architects, and evaluations of the project so that we can coordinate all timelines and logistics prior to start up, ensuring that everything moves as smoothly as possible.'
      />
      <Banner sizes={data.bannerImage.sizes}>
        <h2>
          Get in touch with<br />
          Paradigm<br />
          Construction
        </h2>
      </Banner>
      <Content>
        <Col size='two-third'>
          <AnimScroll>
            <p>
            For project inquiries or to arrange a consultation, please contact:
            </p>
          </AnimScroll>
        </Col>
      </Content>
      <Content>
        <Col size='half'>
          <AnimScroll>
            <h3 className={styles.heading}>General Inquiry / Sales</h3>
            <p>
              <a className={styles.link} href={config.mailto}>info@pcc-tx.com</a>
            </p>
            <h3 className={styles.heading}>Careers</h3>
            <p>
              <a className={styles.link} href={config.careersMailto}>careers@pcc-tx.com</a>
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
      <Industries />
    </main>
  )
}

export const query = graphql`
  query ContactPageQuery {
    bannerImage: imageSharp(id: { regex: "/banners/contact-banner.jpg/" }) {
      sizes(
        quality: 80
        maxWidth: 2400
      ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  `
