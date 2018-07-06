import React from 'react'
import Helmet from 'components/Helmet'

import AnimScroll from 'components/AnimationScroll'
import Banner from 'components/Banner'
import Industries from 'components/Industries'
import Content, { Col } from 'components/Content'
import styles from './styles.module.scss'

import Blueprint from 'components/BlueprintSVGs'

export default function EducationPage({ data }) {
  return (
    <main>
      <Helmet
        title='Education'
        description={`Having completed a variety of both new construction and renovation projects in the educational sector, we are capable of the most innovative and creative designs for vibrant busy schools and libraries.`}
      />
      <Banner sizes={data.bannerImage.sizes}>
        <h2>
          Contruction Solutions for education & libraries<br />
        </h2>
      </Banner>
      <div className={styles.wrapper}>
        <Blueprint svg='Education' />
        <Content padding='xlarge'>
          <Col size='two-third'>
            <AnimScroll>
              <p>
                Having completed a variety of both new construction and renovation projects in the educational sector, we are capable of the most innovative and creative designs for vibrant busy schools and libraries.  We completely understand developing with realistic budgets in mind, but also the need to maximize these budgets not only for current students and staff, but to support your goals for years to come.
              </p>
              <p>
                From classrooms to libraries, Paradigm works closely with its clients, planning for success and results that are driven by research and collaborative workmanship.  We are respectful of the daily operations always and will synchronize construction milestones with staff to avoid any disruptions.
              </p>
              <ul>
                <li>Provide value, cost effective approach</li>
                <li>Little to no disruption in daily activities</li>
                <li>Safety on occupied school campus, maybe something about workers being background checked and cautious of surroundings.</li>
              </ul>
            </AnimScroll>
          </Col>
        </Content>
      </div>
      <Industries />
    </main>
  )
}

export const query = graphql`
  query EducationPageQuery {
    bannerImage: imageSharp(id: { regex: "/banners/education-banner.jpg/" }) {
      sizes(
        quality: 80
        maxWidth: 2400
      ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  `
