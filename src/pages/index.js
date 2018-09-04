import React, { Component } from 'react';
import Helmet from 'components/Helmet';
import Slider, { Slide } from 'components/Slider';

import Intro from 'components/HomeSections/Intro';
import Projects from 'components/HomeSections/Projects';
import Leaders from 'components/HomeSections/Leaders';
import WhoWeAre from 'components/HomeSections/WhoWeAre';
import ContactCTA from 'components/ContactCTA';

export default class HomePage extends Component {
	constructor() {
		super();
		this.state = {
			positionY: 0,

			shouldAnimateProjects: false,
			isProjectsAnimated: false,
			shouldAnimateLeaders: false,
			isLeadersAnimated: false,
			shouldAnimateWhoWeAre: false,
			isWhoWeAreAnimated: false
		};
	}
	componentDidMount() {
		document.body.style.overflowX = 'hidden';
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		document.body.style.overflowX = 'auto';
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = event => {
		const positionY = window.pageYOffset;
		this.setState({ positionY });

		if (this.projects.state.sectionPosition / 1.5 <= positionY) {
			this.setState({ shouldAnimateProjects: true }, () => {
				this.setState({ isProjectsAnimated: true });
			});
		}

		if (this.leaders.state.sectionPosition / 1.5 <= positionY) {
			this.setState({ shouldAnimateLeaders: true }, () => {
				this.setState({ isLeadersAnimated: true });
			});
		}

		if (this.whoWeAre.state.sectionPosition / 1.5 <= positionY) {
			this.setState({ shouldAnimateWhoWeAre: true }, () => {
				this.setState({ isWhoWeAreAnimated: true });
			});
		}
	};

	render() {
		const { data } = this.props;
		const {
			positionY,
			shouldAnimateProjects,
			isProjectsAnimated,
			shouldAnimateLeaders,
			isLeadersAnimated,
			shouldAnimateWhoWeAre,
			isWhoWeAreAnimated
		} = this.state;
		return (
			<main>
				<Helmet
					title="Home Page | Gatsby Template"
					description="Home page of gatasby Template"
				/>
				<Intro
					positionY={positionY}
					slides={[
						data.introSlide1.sizes,
						data.introSlide2.sizes,
						data.introSlide3.sizes
					]}>
					<h2>Building To A Higher Standard.</h2>
					<p>
						Paradigm Construction is a Commercial General Contractor
						headquartered in The Woodlands, TX. Our commitment to Honesty,
						Integrity, and Quality drive our passion for Construction in the
						South Texas Region.
					</p>
				</Intro>
				<Projects
					shouldIRender={shouldAnimateProjects}
					animated={isProjectsAnimated}
					positionY={positionY}
					ref={projects => (this.projects = projects)}>
					<h2>
						Commitment To Projects:<br />
						On Time & On Budget.
					</h2>
					<p>
						Our foundation is about being more than just builders of structures.
						We are also builders of relationships with each project. We approach
						everything we do with honesty, integrity, and teamwork. Investing
						entirely and delivering a custom-designed approach that fits our
						clients' most complex and unique goals.
					</p>
				</Projects>
				<Leaders
					sizes={data.leadershipSlide.sizes}
					ref={leaders => (this.leaders = leaders)}
					shouldIRender={shouldAnimateLeaders}
					animated={isLeadersAnimated}>
					<h2>
						Award-winning Personnel.<br />
						Award-winning work.
					</h2>
					<p>
						Our mission is to provide value in our partnerships. We build trust
						by providing honest, straightforward solutions not only for our
						clients’ but <strong>WITH</strong> our clients. Seeking out projects
						that push our limits and challenge us every step of the way,
						produces award-winning projects that are an extension of who we are.
						If you envision it, we can build it.
					</p>
				</Leaders>
				<WhoWeAre
					ref={whoWeAre => (this.whoWeAre = whoWeAre)}
					shouldIRender={shouldAnimateWhoWeAre}
					animated={isWhoWeAreAnimated}>
					<h2 style={{ marginTop: 20 }}>
						GOING BEYOND<br />
						GENERAL CONTRACTING.
					</h2>
				</WhoWeAre>
				<ContactCTA />
			</main>
		);
	}
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
		introSlide3: imageSharp(id: { regex: "/slides/home-banner-05.jpg/" }) {
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
`;
