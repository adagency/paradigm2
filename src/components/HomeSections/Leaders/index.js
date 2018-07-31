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
			this.setState({ sectionPosition: this.wrapper.offsetTop});
		}

		if (this.props.shouldIRender && !this.props.animated) {
			this.onEntering();
		}
	}

	onEntering = () => {	
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
									Dustin Hall is the founder and President of Paradigm
									Construction. He began his career in the construction industry
									back in 1999 when he joined Fretz Construction Company
									training under the company’s top professionals.
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
									Terry Smith is the Executive Vice President for Paradigm
									Construction. Terry is a native of the Texas Panhandle and
									holds a Bachelor’s degree from West Texas State University. He
									began his career as a teacher and coach at Tomball High School
									in 1992.
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
									Gary Foster is the Senior Vice President of Paradigm
									Construction. Gary is native to Houston and holds a Bachelor’s
									degree from Texas A&M University. He began his institutional/
									educational construction career with the Texas A&M University
									System Facilities Planning and Construction Division
									participating in construction projects as the Owner’s
									representative for the university system.
								</div>
							</div>
							<div
								className={styles.leaderInfoBox}
								ref={c => (this.garyBox = c)}>
								<h4 className={styles.leaderName}>Gary Foster</h4>
								<div className={styles.whiteDivider} style={{ height: 2 }} />
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
									Brandon Aery is Vice President at Paradigm Construction and
									holds a Bachelor’s degree from Angelo State University. He
									began his career as a Project Engineer for a general
									contractor working on medical, religious, and commercial
									facilities.
								</div>
							</div>
							<div
								className={styles.leaderInfoBox}
								ref={c => (this.brandonBox = c)}>
								<h4 className={styles.leaderName}>Brandon Aery</h4>
								<div className={styles.whiteDivider} style={{ height: 2 }} />
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
									Debora Gutierrez is the Controller of Paradigm Construction.
									She received her Associates of Arts Degree and is currently
									pursuing her B.S. and M.S. in Accountancy.
								</div>
							</div>
							<div
								className={styles.leaderInfoBox}
								ref={c => (this.debraBox = c)}>
								<h4 className={styles.leaderName}>Debra Gutierrez</h4>
								<div className={styles.whiteDivider} style={{ height: 2 }} />
								<span className={styles.leaderPosition}>Controller</span>
							</div>
						</Card>
					</div>
				)}
			</div>
		);
	}
}
