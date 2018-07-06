import React from 'react'
import Helmet from 'components/Helmet'

import Banner from 'components/Banner'
import AnimScroll from 'components/AnimationScroll'
import Content, { Col } from 'components/Content'
import AnimatedStats from 'components/AnimatedStats'
import Affiliations from 'components/Affiliations'

import styles from './styles.module.scss'

import Blueprint from 'components/BlueprintSVGs'

export default function WhoWeArePage({ data }) {
  return (
    <main>
      <Helmet
        title='Who We Are'
        description={`We are not just contractors, we are your collaborative partners. Our pre-construction phase involves design with our architects, and evaluations of the project so that we can coordinate all timelines and logistics prior to start up, ensuring that everything moves as smoothly as possible.`}
      />
      <Banner sizes={data.bannerImage.sizes}>
        <h2>
          Success Comes from exceeding your expectations.
        </h2>
      </Banner>
      <div className={styles.wrapper}>
        <Blueprint svg='WhoWeAre' custom='600 100%' duration={9} />
        <Content padding='large'>
          <Col size='two-third'>
            <AnimScroll>
              <h3>Our Culture:</h3>
              <p>
                Are we known to be perfectionist at times? Yes. But this is why early on in our projects our clients have a sense of trust and value, because being accurate builds confidence.
              </p>
              <p>
                We aren’t just contractors we are relationship builders. For a project to be successful, it takes a team of hardworking, creatives who not only focus on the end result but also pay attention to even the smallest of details along the way.
              </p>
              <p>
                Our process is methodical, but this makes us better. The success of every project comes from our talented team and trusted subcontractors who strive beyond there personal strengths to make a clients visions come to life.
              </p>
              <h3>Our commitment:</h3>
              <p>
                To maintain the highest quality of workmanship, by combining experience, professionalism and excellent customer service that builds positive lasting relationships.
              </p>
            </AnimScroll>
          </Col>
        </Content>
      </div>
      <AnimatedStats />
      <Affiliations />
    </main>
  )
}

export const query = graphql`
  query WhoWeArePageQuery {
    bannerImage: imageSharp(id: { regex: "/banners/who-we-are-banner.jpg/" }) {
      sizes(
        quality: 80
        maxWidth: 2400
      ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  `
