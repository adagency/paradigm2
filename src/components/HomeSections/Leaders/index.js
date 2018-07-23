import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from 'components/Link';
import Card from './Card';
//import SVGBackground from './SVGBackground';

import BrandonAery from './Brandon Aery.png';
import DGutierrez from './D Gutierrez.png';
import GaryFoster from './Gary Foster.png';
import DHall from './D Hall.png';
import TerrySmith from './Terry Smith.png';

import styles from './styles.module.scss';

export default class Leaders extends Component {
	static propTypes = {
		// alt: PropTypes.string,
		children: PropTypes.node,
		sizes: PropTypes.object
	};

	constructor() {
		super();
		this.state = {
			sectionPosition: 0,
			timesAnimated: 0,
			onEntering: false
		};
	}

	componentDidUpdate() {
		if (this.state.sectionPosition === 0) {
			this.setState({ sectionPosition: this.wrapper.offsetTop * 2 });
		}

		if (this.props.shouldIRender && !this.props.animated) {
			this.onEntering();
		}
	}

	onEntering = () => {
		TweenMax.fromTo(this.awardCard, 1, { x: -800, y: 0 }, { x: 0, y: 0 });
		TweenMax.fromTo(this.dustinImage, 1.3, { x: -10000, y: 0 }, { x: 0, y: 0 });
		TweenMax.fromTo(this.dustinBox, 1.6, { x: -10000, y: 0 }, { x: 0, y: 0 });
		TweenMax.fromTo(this.terryImage, 1.9, { x: -10000, y: 0 }, { x: 0, y: 0 });
		TweenMax.fromTo(this.terryBox, 2.1, { x: -10000, y: 0 }, { x: 0, y: 0 });
		TweenMax.fromTo(this.garyImage, 2.4, { x: -10000, y: 0 }, { x: 0, y: 0 });
		TweenMax.fromTo(this.garyBox, 2.7, { x: -10000, y: 0 }, { x: 0, y: 0 });
		TweenMax.fromTo(this.brandonImage, 3, { x: -10000, y: 0 }, { x: 0, y: 0 });
		TweenMax.fromTo(this.brandonBox, 3.2, { x: -10000, y: 0 }, { x: 0, y: 0 });
		TweenMax.fromTo(this.debraImage, 3.5, { x: -10000, y: 0 }, { x: 0, y: 0 });
		TweenMax.fromTo(this.debraBox, 3.8, { x: -10000, y: 0 }, { x: 0, y: 0 });
	};

	onLeaving = (direction, timeout) => {
		this.animation.pause(0);
	};

	render() {
		const { children, sizes, shouldIRender } = this.props;
		return (
			<div className={styles.wrapper} ref={wrapper => (this.wrapper = wrapper)}>
				{shouldIRender && (
					<div className={styles.cardRow}>
						<Card style={{ backgroundColor: '#20333E' }}>
							<div className={styles.awardCard} ref={c => (this.awardCard = c)}>
								<p>
									AWARD-WINNING PERSONNEL.<br />HIGHER STANDARDS OF WORK.
								</p>
							</div>
						</Card>
						<Card>
							<img
								src={DHall}
								className={styles.leaderImage}
								ref={image => (this.dustinImage = image)}
							/>
							<div className={styles.leaderOverlay}>
								<div>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
									lacinia eros at mattis gravida. Morbi non felis ac orci
									aliquam congue. Donec ullamcorper consectetur metus et
									fermentum. Suspendisse sollicitudin tincidunt ex.
								</div>
							</div>
							<div
								className={styles.leaderInfoBox}
								ref={c => (this.dustinBox = c)}>
								<h4 className={styles.leaderName}>Dustin Hall</h4>
								<div className={styles.whiteDivider} />
								<span className={styles.leaderPosition}>President</span>
							</div>
						</Card>
						<Card>
							<img
								src={TerrySmith}
								className={styles.leaderImage}
								ref={image => (this.terryImage = image)}
							/>
							<div className={styles.leaderOverlay}>
								<div>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
									lacinia eros at mattis gravida. Morbi non felis ac orci
									aliquam congue. Donec ullamcorper consectetur metus et
									fermentum. Suspendisse sollicitudin tincidunt ex.
								</div>
							</div>
							<div
								className={styles.leaderInfoBox}
								ref={c => (this.terryBox = c)}>
								<h4 className={styles.leaderName}>Terry Smith</h4>
								<div className={styles.whiteDivider} />
								<span className={styles.leaderPosition}>
									Executive Vice President
								</span>
							</div>
						</Card>
					</div>
				)}

				{shouldIRender && (
					<div className={styles.cardRow}>
						<Card>
							<img
								src={GaryFoster}
								className={styles.leaderImage}
								ref={image => (this.garyImage = image)}
							/>
							<div className={styles.leaderOverlay}>
								<div>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
									lacinia eros at mattis gravida. Morbi non felis ac orci
									aliquam congue. Donec ullamcorper consectetur metus et
									fermentum. Suspendisse sollicitudin tincidunt ex.
								</div>
							</div>
							<div
								className={styles.leaderInfoBox}
								ref={c => (this.garyBox = c)}>
								<h4 className={styles.leaderName}>Gary Foster</h4>
								<div className={styles.whiteDivider} />
								<span className={styles.leaderPosition}>
									Senior Vice President
								</span>
							</div>
						</Card>
						<Card>
							<img
								src={BrandonAery}
								className={styles.leaderImage}
								ref={image => (this.brandonImage = image)}
							/>
							<div className={styles.leaderOverlay}>
								<div>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
									lacinia eros at mattis gravida. Morbi non felis ac orci
									aliquam congue. Donec ullamcorper consectetur metus et
									fermentum. Suspendisse sollicitudin tincidunt ex.
								</div>
							</div>
							<div
								className={styles.leaderInfoBox}
								ref={c => (this.brandonBox = c)}>
								<h4 className={styles.leaderName}>Brandon Aery</h4>
								<div className={styles.whiteDivider} />
								<span className={styles.leaderPosition}>Vice President</span>
							</div>
						</Card>
						<Card>
							<img
								src={DGutierrez}
								className={styles.leaderImage}
								ref={image => (this.debraImage = image)}
							/>
							<div className={styles.leaderOverlay}>
								<div>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
									lacinia eros at mattis gravida. Morbi non felis ac orci
									aliquam congue. Donec ullamcorper consectetur metus et
									fermentum. Suspendisse sollicitudin tincidunt ex.
								</div>
							</div>
							<div
								className={styles.leaderInfoBox}
								ref={c => (this.debraBox = c)}>
								<h4 className={styles.leaderName}>Debra Gutierrez</h4>
								<div className={styles.whiteDivider} />
								<span className={styles.leaderPosition}>Controller</span>
							</div>
						</Card>
					</div>
				)}
			</div>
		);
	}
}
