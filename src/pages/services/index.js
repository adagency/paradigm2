import React from 'react'
import Helmet from 'components/Helmet'

import AnimScroll from 'components/AnimationScroll'
import Banner from 'components/Banner'
import Industries from 'components/Industries'
import Content, { Col } from 'components/Content'
import styles from './styles.module.scss'

import Blueprint from 'components/BlueprintSVGs'

import postConstruction from './post-construction.png'
import preConstruction from './pre-construction.png'
import safety from './safety.png'
import scheduling from './scheduling.png'

export default function ServicesPage({ data }) {
  return (
    <main>
      <Helmet
        title='Services'
        description={`We are not just contractors, we are your collaborative partners. Our pre-construction phase involves design with our architects, and evaluations of the project so that we can coordinate all timelines and logistics prior to start up, ensuring that everything moves as smoothly as possible.`}
      />
      <Banner sizes={data.bannerImage.sizes}>
        <h2>
          Our engaged approach to . . .
        </h2>
      </Banner>
      <div className={styles.wrapper}>
        <div className={styles.topPrint}>
          <Blueprint svg='Services' />
        </div>
        <Content padding='medium'>
          <Col size='two-third'>
            <AnimScroll>
              <h3 className={styles.title}>
                  <span className={styles.imgContainer}>
                    <img src={preConstruction} className={styles.img} alt='Pre-construction' />
                  </span>
                Pre-construction
              </h3>
              <p>
                We are not just contractors, we are your collaborative partners. Our
                pre-construction phase involves design with our architects, and
                evaluations of the project so that we can coordinate all timelines and
                logistics prior to start up, ensuring that everything moves as smoothly
                as possible.
              </p>
              <h3 className={styles.title}>
                <span className={styles.imgContainer}>
                  <img src={scheduling} className={styles.img} alt='Scheduling' />
                </span>
                Scheduling
              </h3>
              <p>
                We employ strict scheduling - from site analysis to product selections
                and purchasing, and design efficiencies, we’ll take care of every
                detail and are with you at every step. When the project is clearly
                defined through pre construction, reliable project schedules are met
                at every level. Unquestionably everything matters.
              </p>
              <h3 className={styles.title}>
                <span className={styles.imgContainer}>
                  <img src={safety} className={styles.img} alt='Safety' />
                </span>
                Safety
              </h3>
              <p>
                Paradigms commitment to safety is unparalleled. We develop a
                comprehensive safety plan for the entire project, with the client,
                before we even break ground. This plan includes thorough inspection
                processes, daily evaluations and ongoing training for our
                superintendents to ensure that our employees, subcontractors and
                our clients go home safely every day.
              </p>
              <h3 className={styles.title}>
                <span className={styles.imgContainer}>
                  <img src={postConstruction} className={styles.img} alt='Post-scheduling' />
                </span>
                Post-Construction
              </h3>
              <p>
                Your goals are our goals. It takes supreme knowledge of complex
                construction methods and a methodical approach to hold each team
                member accountable throughout the construction process. Your
                project isn't complete until every last detail is achieved.
              </p>
              <h4>Our post-construction services include: </h4>
              <ul>
                <li>Operation and Maintenance manual development</li>
                <li>As-Built Drawing documentation</li>
                <li>Lien Waivers/Releases settlement</li>
                <li>Coordination of FF&E Delivery and Installation</li>
                <li>Coordination of Move-In</li>
                <li>Warranties</li>
                <li>Assemble “As Builts” and Owner’s Manual</li>
                <li>Project Close- Out</li>
              </ul>
              <h4>BIM Modeling</h4>
              <p>
                BIM otherwise known as Building information modeling involves more
                than just 3D design, it is the process of creating and managing all
                project information from before, during, and after construction.
                Paradigm utilizes BIM modeling to resolve any unforeseen conflicts
                before they arise, and to monitor productivity of the construction
                process.
              </p>
              <h4>Delivery Methods</h4>
              <p>
                Our delivery methods help to reduce risk as well as keep the project
                on time and budget. Discussing the projects needs and specific
                situations with our clients before startup ensures that we have all
                details aligned, goals are met, and quality remains superior.
              </p>
              <h5>Our Delivery Methods include:</h5>
              <ul>
                <li>General Contracting</li>
                <li>Competitive Sealed Proposal (CSP)</li>
                <li>Construction Manager at Risk (CMAR)</li>
                <li>Design Build</li>
                <li>Fee with Negotiated GMP</li>
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
  query ServicesPageQuery {
    bannerImage: imageSharp(id: { regex: "/banners/services-banner.jpg/" }) {
      sizes(
        quality: 80
        maxWidth: 2400
      ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  `
