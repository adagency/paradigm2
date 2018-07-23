import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from 'components/Link';
import Card from './Card';
import SVGBackground from './SVGBackground';

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

	componentDidMount() {
		console.log(10);
	}

	componentDidUpdate() {
		if (this.state.sectionPosition === 0) {
			this.setState({ sectionPosition: this.wrapper.offsetTop });
		}

		if (this.props.shouldIRender && !this.props.animated) {
			this.onEntering();
		}
	}

	onEntering = () => {
		this.animation = new TimelineMax({ paused: true })
			.fromTo(this.awardCard, 0.3, { x: -800, y: 0 }, { x: 0, y: 0 })
			.fromTo(this.dustinImage, 0.3, { x: -10000, y: 0 }, { x: 0, y: 0 })
			.fromTo(this.dustinBox, 0.5, { x: -10000, y: 0 }, { x: 0, y: 0 })
			.fromTo(this.terryImage, 0.3, { x: -10000, y: 0 }, { x: 0, y: 0 })
			.fromTo(this.terryBox, 0.5, { x: -10000, y: 0 }, { x: 0, y: 0 })
			.fromTo(this.garyImage, 0.3, { x: -10000, y: 0 }, { x: 0, y: 0 })
			.fromTo(this.garyBox, 0.5, { x: -10000, y: 0 }, { x: 0, y: 0 })
			.fromTo(this.brandonImage, 0.3, { x: -10000, y: 0 }, { x: 0, y: 0 })
			.fromTo(this.brandonBox, 0.5, { x: -10000, y: 0 }, { x: 0, y: 0 })
			.fromTo(this.debraImage, 0.3, { x: -10000, y: 0 }, { x: 0, y: 0 })
			.fromTo(this.debraBox, 0.5, { x: -10000, y: 0 }, { x: 0, y: 0 });
	};

	onLeaving = (direction, timeout) => {
		this.animation.pause(0);
	};

	render() {
		const { children, sizes, shouldIRender } = this.props;
		return (
			<div className={styles.wrapper} ref={wrapper => (this.wrapper = wrapper)}>
				{shouldIRender && (
					<div>
						<div className={styles.cardRow}>
							<Card style={{ backgroundColor: '#20333E' }}>
								<div
									className={styles.awardCard}
									ref={c => (this.awardCard = c)}>
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
					</div>
				)}
			</div>
		);
	}
}
