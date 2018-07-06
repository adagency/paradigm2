import React from 'react'
import Helmet from 'components/Helmet'

import Banner from 'components/Banner'
import TeamPhotos from 'components/TeamPhotos/'

export default function LeaderShipPage({ data }) {
  return (
    <main>
      <Helmet
        title='Leadership'
        description={``}
      />
      <Banner sizes={data.bannerImage.sizes}>
        <h2>
          Success Comes from exceeding your expectations.
        </h2>
      </Banner>
      <TeamPhotos />
    </main>
  )
}

export const query = graphql`
  query LeaderShipPageQuery {
    bannerImage: imageSharp(id: { regex: "/banners/leadership-banner.jpg/" }) {
      sizes(
        quality: 80
        maxWidth: 2400
      ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  `
