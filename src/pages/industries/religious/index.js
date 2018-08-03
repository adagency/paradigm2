import React from 'react'
import Helmet from 'components/Helmet'

import AnimScroll from 'components/AnimationScroll'
import Banner from 'components/Banner'
import Industries from 'components/Industries'
import Content, { Col } from 'components/Content'
import styles from './styles.module.scss'

import Blueprint from 'components/BlueprintSVGs'

export default function ReligiousPage({ data }) {
  return (
    <main>
      <Helmet
        title='Religious'
        description={`We realize that each or our clients projects is unique, requiring the highest level of attention to detail and quality, to which Paradigm’s church building team is more than qualified.`}
      />
      <Banner sizes={data.bannerImage.sizes}>
        <h2>
          Building religious institutions with a unique character<br />
        </h2>
      </Banner>
      <div className={styles.wrapper}>
        <Blueprint svg='Religious' custom='600 100%' duration={9}/>
        <Content padding='xlarge'>
          <Col size='two-third'>
            <AnimScroll>
              <p>
                We realize that each or our clients projects is unique, requiring the highest
                level of attention to detail and quality, to which Paradigm’s church building
                team is more than qualified. We begin by collaborating with you and your
                committee members not only in regards to budgets, timelines and
                scheduling in all phases of construction, but also with phases of our project
                plan to keep your activities running smoothly with little to no noise
                disruptions.
              </p>
              <p>
                We strive for a full understanding of your vision whether its building a new
                place of worship entirely or a renovation or expansion of an existing
                religious institution. This gained knowledge not only allows us to build a
                well-designed facility, but also one that is unique to you, your personality
                and your ministry.
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
  query ReligiousPageQuery {
    bannerImage: imageSharp(id: { regex: "/banners/religious-banner.jpg/" }) {
      sizes(
        quality: 80
        maxWidth: 2400
      ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  `
