import React from 'react'
import Helmet from 'components/Helmet'

import AnimScroll from 'components/AnimationScroll'
import Banner from 'components/Banner'
import Industries from 'components/Industries'
import Content, { Col } from 'components/Content'
import styles from './styles.module.scss'

import Blueprint from 'components/BlueprintSVGs'

export default function MunicipalsPage({ data }) {
  return (
    <main>
      <Helmet
        title='Municipals'
        description={`Inspiring workspaces, high tech security features and inviting atmospheres; Paradigm takes all these unique factors into account when planning and designing in the municipal construction markets.`}
      />
      <Banner sizes={data.bannerImage.sizes}>
        <h2>
          Municipal
        </h2>
      </Banner>
      <div className={styles.wrapper}>
        <Blueprint svg='Municipals' custom='1500 50%' duration={10} />
        <Content padding='xlarge'>
          <Col size='two-third'>
            <AnimScroll>
              <p>
                Inspiring workspaces, high tech security features and inviting atmospheres;
                Paradigm takes all of these unique factors into account when planning and
                designing in the municipal construction markets.
              </p>
              <p>
                We understand that our clients need to continue operations and to maintain
                a high level of customer service, and we respect that, so our project
                managers will accommodate by limiting construction and visibility where it
                is a concern.
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
  query MunicipalPageQuery {
    bannerImage: imageSharp(id: { regex: "/banners/municipals-banner.jpg/" }) {
      sizes(
        quality: 80
        maxWidth: 2400
      ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  `
