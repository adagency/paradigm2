import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from 'components/Link';
import Card from './Card';
import SVGBackground from './SVGBackground';

import styles from './styles.module.scss';

export default class LeadershipSlide extends Component {
	static propTypes = {
		// alt: PropTypes.string,
		children: PropTypes.node,
		sizes: PropTypes.object
	};

	componentDidMount() {
		//	const paths = this.svg.children;
		/*this.animation = new TimelineMax({ paused: true })
			.fromTo(this.image, 0.5, { opacity: 0, y: 25 }, { opacity: 1, y: 0 })
			.staggerFromTo(
				this.container.children,
				1,
				{ opacity: 0, y: 25 },
				{ opacity: 1, y: 0 },
				0.25
			);*/
		//.from(paths, 5, { drawSVG: '50% 50%', ease: Power0.easeNone }, 1);
	}

	onEntering = (direction, timeout, firstAppear) => {
		/*this.animation
			.timeScale(1)
			.delay(timeout * 1.25)
			.restart(true);*/
	};

	onLeaving = (direction, timeout) => {
		//	this.animation.pause(0);
	};

	render() {
		const { children, sizes } = this.props;
		return (
			<div className={styles.wrapper}>
				<Card style={{ backgroundColor: '#20333E' }}>
					AWARD-WINNING PERSONNEL.HIGHER STANDARDS OF WORK.
				</Card>
				<Card>
					<img />
				</Card>
				<Card>
					<img />
				</Card>
				<Card>
					<img />
				</Card>
				<Card>
					<img />
				</Card>
				<Card>
					<img />
				</Card>
			</div>
		);
	}
}

/*<div className={styles.background}>
	{<SVGBackground
		refAnim={c => {
			this.svg = c
		}}
/>
</div>
<div className={styles.container}>
	<div
		className={styles.content}
		ref={c => {
			this.container = c;
		}}>
		{children}
		<div style={{ textAlign: 'right' }}>
			<Link className={styles.link} to="/industries">
				- Meet Our Leadership Team
			</Link>
		</div>
	</div>
	<div
		className={styles.right}
		ref={c => {
			this.image = c;
		}}>
		<div
			className={styles.imageWrapper}
			ref={c => {
				this.imageWrapper = c;
			}}>
			<img src={sizes.src} sizes={sizes.sizes} srcSet={sizes.srcSet} />
		</div>
	</div>
</div>

*/
