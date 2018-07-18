import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Img from 'gatsby-image';

import styles from './styles.module.scss';

const CHANGE_SLIDE_TIME = 3000;

export default class IntroSlide extends Component {
	static propTypes = {
		// alt: PropTypes.string,
		children: PropTypes.node,
		sizes: PropTypes.object,
		slides: PropTypes.array
	};

	state = {
		activeSlide: this.props.slides[0],
		sliderInterval: null
	};

	componentDidMount() {
		const childrenContent = this.content.children;
		this.animation = new TimelineMax({ paused: true })
			.fromTo(this.container, 1, { opacity: 0 }, { opacity: 1 })
			.staggerFromTo(
				childrenContent,
				1,
				{ opacity: 0, y: 50 },
				{ opacity: 1, y: 0 },
				0.5
			);

		let sliderInterval = setInterval(() => {
			let slides = this.props.slides;
			let newSlide;

			for (let i in slides) {
				if (slides[i].src === this.state.activeSlide.src) {
					if (slides.length === Number(i) + 1) {
						newSlide = slides[0];
					} else {
						newSlide = slides[++i];
					}
					break;
				}
			}

			this.setState({ activeSlide: newSlide });
		}, CHANGE_SLIDE_TIME);

		this.setState({ sliderInterval });
	}

	componentWilllUnmount() {
		clearInterval(this.state.sliderInterval);
	}

	onEntering = (direction, timeout, firstAppear) => {
		const delay = firstAppear ? timeout * 2 : timeout;
		this.animation
			.timeScale(1)
			.delay(delay)
			.restart(true);
	};

	onLeaving = (direction, timeout) => {
		this.animation.pause(0);
	};

	render() {
		const { children, sizes } = this.props;
		const { activeSlide } = this.state;

		return (
			<div className={styles.wrapper}>
				<div
					className={styles.container}
					ref={c => {
						this.container = c;
					}}>
					<div className={styles.imageWrapper}>
						<div className={styles.overlay} />
						<Img
							className={styles.image}
							sizes={activeSlide}
							style={{ position: `absolute`, zIndex: '-1' }}
						/>
					</div>
					<div
						className={styles.content}
						ref={c => {
							this.content = c;
						}}>
						{children}
					</div>
				</div>
				<div
					className={styles.scroll}
					ref={c => {
						this.scrollDown = c;
					}}>
					Scroll Down...
				</div>
			</div>
		);
	}
}
