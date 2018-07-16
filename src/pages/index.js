import React from 'react'
import Helmet from 'components/Helmet'
import Slider, { Slide } from 'components/Slider'
import {
  IntroSlide,
  ProjectsSlide,
  LeadershipSlide,
  WhoWeAreSlide,
} from 'components/Slides'
import ContactCTA from 'components/ContactCTA'

export default function HomePage({ data }) {
  return (
    <main>
      <Helmet
        title='Home Page | Gatsby Template'
        description='Home page of gatasby Template'
      />
      <Slider>
        <Slide>
          <IntroSlide
            slides={[
              data.introSlide1.sizes,
              data.introSlide2.sizes,
              data.introSlide3.sizes,
            ]}
          >
            <h2>Building To A Higher Standard.</h2>
            <p>
							Paradigm Construction is a full-service construction company
							headquartered in The Woodlands, TX with broad experience that
							spans across multiple industries. We don’t just say “quality,” we
							implement and execute it in every project.
            </p>
          </IntroSlide>
        </Slide>
        <Slide>
          <ProjectsSlide>
            <h2>
							Commitment To Projects:<br />
							On Time & On Budget.
            </h2>
            <p>
							Our foundation is about being more than just builders of
							structures. We are also builders of relationships with each
							project. We approach everything we do with honesty, integrity, and
							teamwork. Investing entirely and delivering a custom-designed
							approach that fits our clients' most complex and unique goals.
            </p>
          </ProjectsSlide>
        </Slide>
        <Slide>
          <LeadershipSlide sizes={data.leadershipSlide.sizes}>
            <h2>
							Award-winning Personnel.<br />
							Award-winning work.
            </h2>
            <p>
							Our mission is to provide value in our partnerships. We build
							trust by providing honest, straightforward solutions not only for
							our clients’ but <strong>WITH</strong> our clients. Seeking out
							projects that push our limits and challenge us every step of the
							way, produces award-winning projects that are an extension of who
							we are. If you envision it, we can build it.
            </p>
          </LeadershipSlide>
        </Slide>
        <Slide>
          <WhoWeAreSlide>
            <h2>
							Going Beyond<br />
							General contracting.
            </h2>
            <p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
							tincidunt, neque et eleifend consequat, turpis lorem vehicula
							sapien, quis laoreet ante lacus id nibh. Class aptent taciti
							sociosqu ad litora torquent per conubia nostra, per inceptos
							himenaeos. Nullam non tristique lorem.
            </p>
          </WhoWeAreSlide>
        </Slide>
        <Slide>
          <ContactCTA slide />
        </Slide>
      </Slider>
    </main>
  )
}

export const query = graphql`
	query HomePageQuery {
		introSlide1: imageSharp(id: { regex: "/slides/home-banner-01.png/" }) {
			sizes(quality: 80, maxWidth: 2400) {
				...GatsbyImageSharpSizes
			}
		}
		introSlide2: imageSharp(id: { regex: "/slides/home-banner-02.png/" }) {
			sizes(quality: 80, maxWidth: 2400) {
				...GatsbyImageSharpSizes
			}
		}
		introSlide3: imageSharp(id: { regex: "/slides/home-banner-03.png/" }) {
			sizes(quality: 80, maxWidth: 2400) {
				...GatsbyImageSharpSizes
			}
		}
		leadershipSlide: imageSharp(
			id: { regex: "/slides/award-winning-slide.jpg/" }
		) {
			sizes(quality: 80, maxWidth: 600) {
				...GatsbyImageSharpSizes
			}
		}
	}
`
