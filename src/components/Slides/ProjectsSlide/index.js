/*import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from 'components/Link';
import SVGBackground from './SVGBackground';
import ProjectsSlideBackground from '../../../images/banners/section-2.png';

import styles from './styles.module.scss';

import SVGHouse from './SVGHouse';
import part1 from './1.png';
import part2 from './2.png';
import part3 from './3.png';
import part4 from './4.png';
import part5 from './5.png';
import part7 from './7.png';
import part8 from './8.png';
import part9 from './9.png';
import part10 from './10.png';
import part11 from './11.png';
import part12 from './12.png';
import part13 from './13.png';
import part14 from './14.png';
import part15 from './15.png';
import part16 from './16.png';
import part17 from './17.png';
import part18 from './18.png';
import part19 from './19.png';
import part20 from './20.png';
import part21 from './21.png';
import part22 from './22.png';

export default class ProjectsSlide extends Component {
	static propTypes = {
		// alt: PropTypes.string,
		children: PropTypes.node
	};

	componentDidMount() {
		//const paths = this.svg.children;
		const houseDrawing = this.imageWrapper.children[0].children;
		const parts = Array.from(this.imageWrapper.children).slice(
			1,
			this.imageWrapper.children.length
		);
		this.animation = new TimelineMax({ paused: true })
			.staggerFromTo(
				this.container.children,
				1,
				{ opacity: 0, y: 25 },
				{ opacity: 1, y: 0 },
				0.25
			)
			.staggerFrom(parts, 0.5, { opacity: 0, y: -15 }, 0.15, 0.1);
		//.from(paths, 10, { drawSVG: '1500 50%', ease: Power0.easeNone }, 1)
		//.from(houseDrawing, 2, { drawSVG: '50% 50%', ease: Power0.easeNone }, 0.5)
	}

	onEntering = (direction, timeout, firstAppear) => {
		this.animation
			.timeScale(1)
			.delay(timeout)
			.restart(true);
	};

	onLeaving = (direction, timeout) => {
		this.animation.pause(0);
	};

	render() {
		const { children } = this.props;
		return (
			<div className={styles.wrapper}>
				<div className={styles.background}>
					{/*<SVGBackground
						refAnim={c => {
							this.svg = c;
						}}
					/>*/
/*		</div>
				<div className={styles.container}>
					<div className={styles.right}>
						<div
							className={styles.imageWrapper}
							ref={c => {
								this.imageWrapper = c;
							}}>
							{/*<SVGHouse />*/
/*				<img src={part1} />
							<img src={part2} />
							<img src={part3} />
							<img src={part4} />
							<img src={part5} />
							<img src={part7} />
							<img src={part8} />
							<img src={part9} />
							<img src={part10} />
							<img src={part11} />
							<img src={part12} />
							<img src={part13} />
							<img src={part14} />
							<img src={part15} />
							<img src={part16} />
							<img src={part17} />
							<img src={part18} />
							<img src={part19} />
							<img src={part20} />
							<img src={part21} />
							<img src={part22} />
						</div>
					</div>
					<div
						className={styles.content}
						ref={c => {
							this.container = c;
						}}>
						{children}
						<div style={{ textAlign: 'right' }}>
							<Link className={styles.link} to="/projects#">
								<button className={styles.viewOurProjectsButton}>
									<span>- View Our Projects</span>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}*/
