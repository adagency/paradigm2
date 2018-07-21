import React, { Component } from 'react';
import Helmet from 'components/Helmet';
import Slider, { Slide } from 'components/Slider';
import Intro from 'components/HomeSections/Intro';
import Projects from 'components/HomeSections/Projects';
import ContactCTA from 'components/ContactCTA';

export default class HomePage extends Component {
	constructor() {
		super();
		this.state = {
			positionY: 0,

			shouldAnimateProjects: false,
			isProjectsAnimated: false
		};
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
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
	};

	render() {
		const { data } = this.props;
		const { positionY, shouldAnimateProjects, isProjectsAnimated } = this.state;
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
						Paradigm Construction is a full-service construction company
						headquartered in The Woodlands, TX with broad experience that spans
						across multiple industries. We don’t just say “quality,” we
						implement and execute it in every project.
					</p>
				</Intro>
				<Projects
					shouldIRender={shouldAnimateProjects}
					animated={isProjectsAnimated}
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
`;
