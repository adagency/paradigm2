import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from 'components/Link';
//import SVGBackground from './SVGBackground';
import whoWeAreBk from './brick-bkg.png';

import styles from './styles.module.scss';
import briley from './Briley_Web.png';
import wall from './brick-wall.jpg';
import couch from './couch.png';
import dog from './dog.png';

export default class WhoWeAreSlide extends Component {
	static propTypes = {
		// alt: PropTypes.string,
		children: PropTypes.node
	};

	constructor() {
		super();
		this.state = {
			sectionPosition: 0,
			timesAnimated: 0,
			onEntering: false,
			width: 0
		};
	}

	componentDidMount() {
		this.setState({
			width: window.innerWidth
		});
	}

	componentDidUpdate() {
		if (this.state.sectionPosition === 0) {
			this.setState({ sectionPosition: this.wrapper.offsetTop* 1.7 });
		}

		if (this.props.shouldIRender && !this.props.animated) {
			this.onEntering();
		}
	}

	onEntering = () => {
		TweenMax.staggerFromTo(
			this.container.children,
			1,
			{ opacity: 0, y: 25 },
			{ opacity: 1, y: 0 },
			0.25
		);

		TweenMax.from(this.imageWrapper, 4, { opacity: 0, y: '-50%' }, 0.5);
	};

	onLeaving = (direction, timeout) => {
		this.animation.pause(0);
	};

	renderInfoBox(shouldIRender, children) {
		return (
			<div>
				{shouldIRender && children}
				{shouldIRender && (
					<div style={{ textAlign: 'center' }}>
						<Link className={styles.link} to="/about">
							<button className={styles.seeWhoWeAreButton}>
								<span>- SEE WHO WE ARE</span>
							</button>
						</Link>
					</div>
				)}
			</div>
		);
	}

	renderImage(shouldIRender) {
		return (
			<div>
				{shouldIRender && (
					<div
						className={styles.imageWrapper}
						ref={c => {
							this.imageWrapper = c;
						}}>
						<img src={briley} />
					</div>
				)}
			</div>
		);
	}

	render() {
		const { children, shouldIRender } = this.props;
		const { width } = this.state;

		return (
			<div
				className={styles.wrapper}
				ref={wrapper => (this.wrapper = wrapper)}
				style={{ backgroundImage: `url(${whoWeAreBk})` }}>
				<div className={styles.background}>
					{/*<SVGBackground
						refAnim={c => {
							this.svg = c;
						}}
					/>*/}
				</div>
				<div className={styles.container}>
					<div
						className={styles.content}
						ref={c => {
							this.container = c;
						}}>
						{width > 639
							? this.renderInfoBox(shouldIRender, children)
							: this.renderImage(shouldIRender)}
					</div>
					<div className={styles.right}>
						{width > 639
							? this.renderImage(shouldIRender)
							: this.renderInfoBox(shouldIRender, children)}
					</div>
				</div>
			</div>
		);
	}
}
