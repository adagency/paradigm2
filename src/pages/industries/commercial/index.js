import React from 'react'
import Helmet from 'components/Helmet'

import AnimScroll from 'components/AnimationScroll'
import Banner from 'components/Banner'
import Industries from 'components/Industries'
import Content, { Col } from 'components/Content'
import styles from './styles.module.scss'

import Blueprint from 'components/BlueprintSVGs'

export default function CommercialPage({ data }) {
  return (
    <main>
      <Helmet
        title='Commercial'
        description={`Our strong desire to succeed in the competitive commercial construction market, that's continually advancing, gives us an edge over our competition.`}
      />
      <Banner sizes={data.bannerImage.sizes}>
        <h2>
          {/* Commercial Construction:<br /> */}
          Custom tailored commercial solutions
        </h2>
      </Banner>
      <div className={styles.wrapper}>
        <Blueprint svg='Commercial' />
        <Content padding='xlarge'>
          <Col size='two-third'>
            <AnimScroll>
              <p>
                Our strong desire to succeed in the competitive commercial construction
                market, that's continually advancing, gives us an edge over our
                competition. Being timely, producing exemplary quality and design while
                managing cost control, and without compromising safety is what has
                earned us a reputation for delivering value and respect to our clients.
              </p>
              <p>
                Whether building new construction or transforming a space where you
                work, socialize and unwind, we will respect your daily business operations
                from concept to completion. Our sensitivity to the working area of occupied
                buildings allows us to avoid disruptions through coordination and
                collaboration with your team members at every construction milestone.
              </p>
              <p>
                Our overall goal is to create an impeccably designed space that emulates
                your vision, culture and the brand of your company; because we know first
                impressions are everything.
              </p>
            </AnimScroll>
          </Col>
        </Content>
      </div>
      <Industries />
    </main>
  )
}

export const query = graphql`
  query CommercialPageQuery {
    bannerImage: imageSharp(id: { regex: "/banners/commercial-banner.jpg/" }) {
      sizes(
        quality: 80
        maxWidth: 2400
      ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  `
